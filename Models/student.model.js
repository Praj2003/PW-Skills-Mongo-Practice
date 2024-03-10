const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    Qualification : String

})

module.exports = mongoose.model("Student Details",studentSchema)