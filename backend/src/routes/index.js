const express = require('express');

module.exports = authenticate =>  {
  const router = express.Router();
  const userRoutes = require('./user.route')(authenticate)
  const leagueRoutes = require('./league.route')(authenticate)
  const tournamentRoutes = require('./tournament.route')(authenticate)
  router.use('/user', userRoutes);
  router.use('/league', leagueRoutes);
  router.use('/tournament', tournamentRoutes);
  return router;
};