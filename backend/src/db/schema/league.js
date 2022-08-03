const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');

const LeagueSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    logo:{
        type: String,
        trim: true,
    },
    flg_private:{
        type: Boolean,
        trim: true
    },
    creation_date:{
        type: Date,
        default: Date.now
    },
    owner:{
        type: String,
        trim: true
    },
    invite_code: {
        type: String,
        trim: true,
        default: uuidv4()
    }
},{ autoCreate: true});

const League = mongoose.model('League', LeagueSchema);

module.exports = League;