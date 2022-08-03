const mongoose = require('mongoose');

const TourSurvivorSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        uppercase: true
    },
    championship:{
        type: String,
        trim: true,
        uppercase: true
    },
    logo:{
        type: String,
        trim: true,
        uppercase: true
    },
    creation_date:{
        type: Date, default: Date.now
    },
    championship_startday:{
        type: Number
    },
    championship_endday:{
        type: Number
    },
    winner:{
        type: String,
        trim: true,
        uppercase: true
    }
},{ autoCreate: true});

const TourSurvivor = mongoose.model('TourSurvivor', TournamentSchema);

module.exports = TourSurvivor;