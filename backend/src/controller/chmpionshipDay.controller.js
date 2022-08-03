const ChampionshipDay = require('../db/schema/championshipDay')
const data = require('../../data/championshipDay.json')

const loadData = async() =>{
    await ChampionshipDay.collection.drop();
    return await ChampionshipDay.collection.insertMany(data);
}

function getDay(name) {
return ChampionshipDay.find({championship: name}).lean();
}


module.exports = {
    loadData,
    getDay
}

