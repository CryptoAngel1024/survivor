const Match = require('../db/schema/match')
const data = require('../../data/match.json')

/**
 * Save a new Match
 * @param {*} championship 
 * @param {*} championship_day 
 * @param {*} championship_date 
 * @param {*} team_home 
 * @param {*} team_away 
 * @param {*} team_home_score 
 * @param {*} team_away_score 
 * @param {*} flg_ending 
 * @returns 
 */
const saveMatch = async (championship, championship_day, championship_date, team_home, team_away, team_home_score, team_away_score, flg_ending) => {
    let match = new Match({
        championship: championship,
        championship_day: championship_day,
        championship_date: championship_date,
        team_home: team_home,
        team_away: team_away,
        team_home_score: team_home_score,
        team_away_score: team_away_score,
        flg_ending: flg_ending
    });
    return match.save();
}

function updateMatch(filter, fields) {
    return Match.findOneAndUpdate(filter, fields);
}

/**
 * Gets an user for a given username
 * @param {*} username 
 * @returns 
 */
function getMatch(championship, championship_day) {
  return User.find({championship: championship, championship_day: championship_day}).lean();
}

const loadData = async() =>{
    await Match.collection.drop();
    return await Match.collection.insertMany(data);
}

module.exports = {
    saveMatch,
    getMatch,
    loadData
}

