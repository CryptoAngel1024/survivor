const mongoose = require('mongoose');

const TournamentSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        uppercase: true
    },
    league:{
        type: String,
        trim: true,
        uppercase: true
    },
    championship:{
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
    },
    creation_user:{
        type: String,
        trim: true,
        uppercase: true
    },
    flg_active:{
        type: Boolean,
    }
},{ autoCreate: true});

const Tournament = mongoose.model('Tournament', TournamentSchema);

module.exports = Tournament;