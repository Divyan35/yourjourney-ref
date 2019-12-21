const mongoose = require('mongoose');

const TravelSchema = mongoose.Schema({
    source:{
        type:String,
        required:true
    },
    destination:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('travel',TravelSchema);