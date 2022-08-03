const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
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
    score:{
        type:Number
    },
    ranking:{
        type:Number
    },
    next_match_team:{
        type:String,
        trim: true,
        uppercase: true
    },
    next_match_comment:{
        type:String,
        trim: true
    },
    next_match_percentage:{
        type:Number
    },
    match:{
        type:[{
            championship_day: {type:Number},
            team_away: {type:String, trim: true, uppercase: true},
            score_team: {type:Number},
            score_away: {type:Number}
        }]
    }
},{ autoCreate: true});


const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;