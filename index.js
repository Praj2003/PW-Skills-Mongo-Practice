//establishment of the connection with mongodb

const mongoose = require('mongoose');
const personalDetailsModel = require("./Models/student.model")

mongoose.connect("mongodb://localhost/practice_db")//provide the url for the database to be connected with

const db = mongoose.connection;//ordering the connection to get completed

//Error Handling

db.on("error",() =>{
    console.log("There is some error while connecting to the database")
})

db.once("open",() =>{
    console.log("Database has been successfully connected to the database!")
    // init();
    dbQueries();
})

//creating a function to enter data in documents

async function init(){
    const person = {
        fatherName : "Kishan Kainth",
        motherName : "Uma Devi"
    }

    const details = await personalDetailsModel.create(person);
    console.log(details);

}
//Performing the crud operations on the database
async function dbQueries(){
    //Reading the data from the database
    // const read = await personalDetailsModel.findById("65eff93186b9d15941eb5159")
    // console.log(read);

    const read2 = await personalDetailsModel.find({motherName : "Uma Devi"})
    console.log(read2);

    //deleting the records from the database

    const deletedRecord = await personalDetailsModel.deleteOne({motherName : "Renu Gill"})
    console.log(deletedRecord);
}