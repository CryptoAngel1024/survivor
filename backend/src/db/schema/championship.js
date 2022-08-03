const mongoose = require('mongoose');

const ChampionshipSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    country:{
        type: String,
        trim: true,
        uppercase: true
    },
    logo:{
        type: String,
        trim: true,
        uppercase: true
    }
},{ autoCreate: true});

const Championship = mongoose.model('Championship', ChampionshipSchema);

module.exports = Championship;