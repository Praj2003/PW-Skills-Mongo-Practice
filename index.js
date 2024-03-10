const mongoose = require('mongoose');
const studentModel = require('./Models/student.model')

mongoose.connect("mongodb://localhost/practice_db");//we are providing a path of the database to be connected

const db = mongoose.connection;//Ordering the connect

db.on("error",()=>{
    console.log("Some error occured while connecting to the database!")
})

db.once("open",()=>{
    console.log("Database has been connected successfully!")
})

async function init(){
    const student = {
        name : "Prajval",
        age : 24,
        qualification : "Btech in computer science"
    }

    const studentObject = await studentModel.create(student);
    console.log(studentObject);
}

init();
