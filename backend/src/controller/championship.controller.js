const Championship = require('../db/schema/championship')
const data = require('../../data/championship.json')

/**
 * Save a new championship 
 * @param {*} name 
 * @param {*} country 
 * @param {*} logo 
 * @returns 
 */
const saveChampionship = async (name, country, logo) => {
    let championship = new Championship({
        name: name,
        country: country,
        logo: logo
    });
    return championship.save();
}

function updateChampionship(filter, fields) {
    return Championship.findOneAndUpdate(filter, fields);
}

/**
 * Gets an user for a given username
 * @param {*} username 
 * @returns 
 */
function getChampionship(name) {
  return Championship.findOne({name: name}).lean();
}

const getChampionships = async()=>{
    return Championship.find({},{ name: 1, _id: 0 })
}
const loadData = async() =>{
     Championship.collection.drop();
    return await Championship.collection.insertMany(data);
}

module.exports = {
    saveChampionship,
    updateChampionship,
    getChampionship,
    getChampionships,
    loadData
}

