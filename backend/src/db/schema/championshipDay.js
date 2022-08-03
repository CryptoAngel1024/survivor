const mongoose = require('mongoose');

const ChampionshipDaySchema = new mongoose.Schema({
    day:{
        type: Number,
        required: true
    },
    championship:{
        type: String,
        trim: true,
        uppercase: true
    },
    starting_date:{
        type: Date
    },
    flg_ending:{
        type: Boolean
    }
},{ autoCreate: true});

const ChampionshipDay = mongoose.model('ChampionshipDay', ChampionshipDaySchema);

module.exports = ChampionshipDay;