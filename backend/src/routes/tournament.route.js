const express = require('express')
const tournamentController = require('../controller/tournament.controller');
const championshipController = require('../controller/championship.controller');
const championshipDayController = require('../controller/chmpionshipDay.controller');
const confirmationEmail = require("../../templates/confirmationEmail");
const userController = require("../controller/user.controller");

async function CreateTournament(req, res) {
  try {
    if(req.body.tournamentName) {
        let user = res.locals.oauth.token.user;
        let saveTournament = await tournamentController.saveTournament(req.body.tournamentName,  req.body.league, Date.now(), req.body.startingDay,  null, null, user.username, false );
        
        req.body.users.map(async user=>{
           userController.updateUserByTournament(user.email, req.body.league, saveTournament._id);
        })
        return res.send({response: "Ok", result: "Ok"});
    }
  } catch (error) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function TournamentNameExist(req, res) {
  try {
    let tournament = await tournamentController.getExist(req.query.tournamentName, req.query.leagueName);
    if (tournament.length > 0)
      return res.send({response: "Ok", result: {exist: true}});
    else
      return res.send({response: "Ok", result: {exist: false}});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function getChampionship(req, res) {
  try {
    let championShip = await championshipController.getChampionships()
    return res.send({response: "Ok", result: championShip});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function getStartingDay(req, res) {
  try {
    
    let championshipDays = await championshipDayController.getDay(req.query.championShip)
    const baseTime = Date.now()
    const hourtomilisecond = 3600000
        let championshipDay = championshipDays.filter(championshipDay => (((+new Date(championshipDay.starting_date))-baseTime)/hourtomilisecond) > 3)
        console.log("championshipDay", championshipDay)
    return res.send({response: "Ok", result: championshipDay});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}

async function getUsers(req, res) {
  try {
    let users = await userController.getUserByLeagueName(req.query.leagueName)
    return res.send({response: "Ok", result: users});
  } catch (err) {
    return res.status(500).send({response: "Error", result: err})
  }
}


module.exports = authenticate => {
  const tournamentRoutes = express.Router();
  tournamentRoutes.post('/create', authenticate, CreateTournament);
  tournamentRoutes.get('/championship', authenticate, getChampionship);
  tournamentRoutes.get('/startingday', authenticate, getStartingDay);
  tournamentRoutes.get('/exist', authenticate, TournamentNameExist);
  tournamentRoutes.get('/users', authenticate, getUsers);
  return tournamentRoutes;
};