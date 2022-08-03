const express = require('express');
const app = express(), bodyParser = require("body-parser");
const oauthServer = require('oauth2-server');
const Request = oauthServer.Request;
const Response = oauthServer.Response;
const cors = require('cors')
const oauth = require('./oauth')
require('./db/dbConf');
const userController = require('./controller/user.controller');
const oauthController = require('./controller/oauth.controller');
const leagueController = require('./controller/league.controller');
const championshipController = require('./controller/championship.controller');
const tournamentController = require('./controller/tournament.controller');
const matchController = require('./controller/match.controller');
const championshipDay = require('./controller/chmpionshipDay.controller');
require('./passport-setup');
const passport = require('passport')
const cookieSession = require('cookie-session')
const querystring = require('querystring');
const router = require('./routes')(authenticate)
const path = require('path');

port = 3080;

app.oauth = new oauthServer({
  model: require('./controller/oauth.controller.js'),
  debug: true
});

app.use(cors())

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)
  // Pass to next layer of middleware
  next()
})

app.all('/oauth/token', function (req, res, next) {
  var request = new Request(req);
  var response = new Response(res);

  app.oauth
    .token(request, response)
    .then(function (token) {
      // Todo: remove unnecessary values in response
      return res.json(token)
    }).catch(function (err) {
    return res.status(500).json(err)
  })
});

app.use(express.static("../static"));


app.get('/', (req, res) => {
  res.sendFile(path.resolve('../static/index.html'));
});


app.post('/authorise', function (req, res) {
  var request = new Request(req);
  var response = new Response(res);

  return oauth.authorize(request, response).then(function (success) {
    res.json(success)
  }).catch(function (err) {
    res.status(err.code || 500).json(err)
  })
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
  leagueController.loadData();
  userController.loadData();
  oauthController.loadData();
  championshipController.loadData();
  tournamentController.loadData();
  matchController.loadData();
  championshipDay.loadData();
});

const printAddress = async () => {
  userController.getUserByEmail('antonello.daloia@gmail.com').then(function(result) {
    console.log('User: '+result.name);
    leagueController.updateLeague({name:'fantaghigi'}, {owner:result});});
};

function authenticate(req, res, next) {
  let request = new Request({
    headers: {authorization: req.headers.authorization},
    method: req.method,
    query: req.query,
    body: req.body
  });
  let response = new Response(res);

  app.oauth.authenticate(request, response)
    .then(function (token) {
      res.locals.oauth = {token: token};
      next()
    })
    .catch(function (err) {
      // Request is not authorized.
      res.status(err.code || 500).json(err)
    });
}

//Google Passport
app.use(cookieSession({
  name: 'survivor-session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);

app.get('/oauth/google',
  passport.authenticate('google', {
      scope: ['email', 'profile']
    }
  ));

app.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:3000/Home?error=true'
  }), (req, res) => {
    if (!req.user.password) {
      let query = querystring.stringify({
        surname: req.user.family_name,
        name: req.user.given_name,
        email: req.user.email
      })
      return res.redirect('http://localhost:3000/Signin?' + query);
    }
    let body = {
      username: req.user.username,
      password: req.user.password,
      grant_type: "password"
    };
    let localOauthRequest = {
      headers: {
        authorization: "Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0",
      },
      method: 'POST',
      query: {},
      body: body
    }
    localOauthRequest["headers"]["content-type"] = "application/x-www-form-urlencoded";
    localOauthRequest["headers"]["content-length"] = new Buffer(JSON.stringify(body)).length;
    let request = new Request(localOauthRequest);
    let response = new Response(res);

    app.oauth
      .token(request, response)
      .then(function (token) {
        return res.redirect("http://localhost:3000/Home?token=" + token.refreshToken)
      }).catch(function (err) {
        console.log(err);
        return null;
    })
  });

  app.get('/oauth/facebook',
  passport.authenticate('facebook'
  ));

  app.get('/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: 'http://localhost:3000/Home?error=true'
  }), (req, res) => {
    let body = {
      username: req.user.username,
      password: req.user.password,
      grant_type: "password"
    };
    let localOauthRequest = {
      headers: {
        authorization: "Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0",
      },
      method: 'POST',
      query: {},
      body: body
    }
    localOauthRequest["headers"]["content-type"] = "application/x-www-form-urlencoded";
    localOauthRequest["headers"]["content-length"] = new Buffer(JSON.stringify(body)).length;
    let request = new Request(localOauthRequest);
    let response = new Response(res);

    app.oauth
      .token(request, response)
      .then(function (token) {
        return res.redirect("http://localhost:3000/Home?token=" + token.refreshToken)
        return res.send(token)
      }).catch(function (err) {
        console.log(err);
        return null;
    })
  });