const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
    championship:{
        type: String,
        trim: true,
        uppercase: true
    },
    championship_day:{
        type: Number
    },
    championship_date:{
        type: Date
    },
    team_home:{
        type: String,
        trim: true,
        uppercase: true
    },
    team_away:{
        type: String,
        trim: true,
        uppercase: true
    },
    team_home_score:{
        type: Number
    },
    team_away_score:{
        type: Number
    },
    flg_ending:{
        type: Boolean
    }
},{ autoCreate: true});

const Match = mongoose.model('Match', MatchSchema);

module.exports = Match;