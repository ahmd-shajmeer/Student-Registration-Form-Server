const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const students = mongoose.model("students",studentSchema)

module.exports = students