const Team = require('../db/schema/team')
//const data = require('../../data/users.json')

/**
 * Save a new championship
 * @param {*} id 
 * @param {*} name 
 * @param {*} country 
 * @param {*} logo 
 * @returns 
 */
const saveTeam = async (id, name, championship, logo, score) => {
    let team = new Team({
        id: id,
        name: name,
        logo: logo,
        championship: championship, 
        score: score
    });
    return team.save();
}

function updateTeam(filter, fields) {
    return Team.findOneAndUpdate(filter, fields);
}

/**
 * Gets an user for a given username
 * @param {*} username 
 * @returns 
 */
function getTeam(name) {
  return Team.findOne({name: name}).lean();
}


const loadData = async() =>{
    Team.collection.drop();
    return Team.collection.insertMany(data);
}

module.exports = {
    saveTeam,
    updateTeam,
    getTeam,
    loadData
}

