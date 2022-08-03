const express = require('express');
const leagueController = require('../controller/league.controller')
const userController = require("../controller/user.controller");
const mailService = require("../services/mail.service");
const confirmationEmail = require("../../templates/confirmationEmail");
const User = require("../db/schema/user");

async function LeagueExist(req, res) {
  try {
    let league = await leagueController.getLeagueByName(req.query.name);
    if (!league)
      return res.send({response: "Ok", result: {exist: false}});
    else
      return res.send({response: "Ok", result: {exist: true}});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function CreateLeague(req, res) {
  try {

    let league = await leagueController.getLeagueByName(req.query.name);
    if (league)
      return res.send({response: "Error", result: "User with email already exist"});
    let user = res.locals.oauth.token.user;
    let savedLeague = await leagueController.saveLeague(req.body.name,  req.body.image, false, Date.now(), user.username);
    await userController.updateUser({email: user.email}, {$push: {league: {name: savedLeague.name, role: "OWNER", status: "ACTIVE"}}});
    return res.send({response: "Ok", result: "Ok"});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function getLeagueList(req, res) {
  try {
    let user = await userController.getUserByEmail(res.locals.oauth.token.user.email);
    if (!user)
      return res.send({response: "Error", result: "User not found"});
    let leagueList = [];
    if (user.league) {
      let leagueNames = user.league.map((l) => l.name);
      
      if (req.query.name) {
        leagueNames = leagueNames.filter((leagueName) => leagueName === req.query.name);
      }
      leagueList = await leagueController.getLeaguesByField("name", leagueNames);
      if (!leagueList)
        return res.send({response: "Error", result: "League not found"});
    }
    return res.send({response: "Ok", result: leagueList});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function joinToLeague(req, res) {
  try {
    let user = await userController.getUserByEmail(res.locals.oauth.token.user.email);
    if (!user)
      return res.status(400).send({response: "Error", result: "User not found"});
    if (!req.body.invite_code) {
      return res.status(422).send({response: "Error", result: "Invite code required"});
    }
    let league = await leagueController.getOneLeagueByObjectFields({invite_code: req.body.invite_code})
    if (!league)
      return res.status(400).send({response: "Error", result: "Invite code not valid"});
    await userController.updateUser({email: user.email}, {$push: {league: {name: league.name, role: "USER", status: "TO_ACCEPT"}}});
    return res.send({response: "Ok", result: "Ok"});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}


module.exports = authenticate => {
  const leagueRoutes = express.Router();
  leagueRoutes.get('/exist', authenticate, LeagueExist);
  leagueRoutes.post('/create', authenticate, CreateLeague);
  leagueRoutes.get('/', authenticate, getLeagueList);
  leagueRoutes.post('/join', authenticate, joinToLeague);
  return leagueRoutes;
};