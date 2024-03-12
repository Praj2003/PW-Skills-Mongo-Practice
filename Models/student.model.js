const mongoose = require('mongoose');

//Defining the schema

const parentSchema = new mongoose.Schema({
    fatherName : {
        type : String,
        
        required : true
    },

    motherName : {
        type : String,
        
        required : true
    },

    dob : {
        type : Date,

    }
})

module.exports = mongoose.model("PersonalDetails",parentSchema);