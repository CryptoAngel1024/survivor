const League = require('../db/schema/league')
const leagues = require('../../data/league.json')


/**
 * Save a new League
 * @param {*} id 
 * @param {*} name 
 * @param {*} logo 
 * @param {*} private 
 * @param {*} creation_date 
 * @param {*} owner 
 * @returns 
 */
const saveLeague = async (name, logo, private, creation_date, owner) => {
    let league = new League({
        name: name,
        logo: logo,
        private: private, 
        creation_date: creation_date,
        owner: owner
    });
    return league.save();
}

function updateLeague(filter, fields) {
    return League.findOneAndUpdate(filter, fields);
}

/**
 * Gets an user for a given username
 * @param {*} username 
 * @returns 
 */
function getLeagueByName(name) {
  return League.findOne({name: name}).lean();
}

function getOneLeagueByObjectFields(objectFields) {
    return League.findOne(objectFields).lean();
}

function getLeaguesByField(field, list) {
    return League.find({[field]: {$in: list}});
}


const loadData = async() =>{
    await League.collection.drop();
    return await League.collection.insertMany(leagues);
}

module.exports = {
    saveLeague,
    updateLeague,
    getLeagueByName,
    loadData,
    getLeaguesByField,
    getOneLeagueByObjectFields
}

