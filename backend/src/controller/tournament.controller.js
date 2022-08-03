const Tournament = require('../db/schema/tournament')
const data = require('../../data/tournament.json')

/**
 * Save new Torunament
 * @param {*} name 
 * @param {*} league 
 * @param {*} creation_date 
 * @param {*} championship_startday 
 * @param {*} championship_endday 
 * @param {*} winner 
 * @param {*} creation_user
 * @param {*} flg_active
 * @returns 
 */
const saveTournament = async (name, league, creation_date, championship_startday, championship_endday, winner, creation_user, flg_active) => {
    let torunament = new Tournament({
        name: name,
        league: league,
        creation_date: creation_date, 
        championship_startday: championship_startday,
        championship_endday: championship_endday,
        winner: winner,
        creation_user: creation_user,
        flg_active: flg_active
    });
    return torunament.save();
}

function updateTournament(filter, fields) {
    return Tournament.findOneAndUpdate(filter, fields);
}

/**
 * Gets an user for a given username
 * @param {*} username 
 * @returns 
 */
function getTournament(name) {
  return Tournament.find({name: name}).lean();
}

function getExist(tournamentName, leaguName) {
    return Tournament.find({name: tournamentName, league:leaguName}).lean();
}




const loadData = async() =>{
    Tournament.collection.drop();
    return Tournament.collection.insertMany(data);
}


module.exports = {
    saveTournament,
    updateTournament,
    getTournament,
    getExist,
    loadData
}

