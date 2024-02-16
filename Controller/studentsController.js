const students = require('../Models/studentModel')

exports.register = async (req,res) =>{
    const {firstname,lastname,address,email,number,gender,dob,course,password} = req.body
    // console.log("Inside register request");
    try{
        // Check email already exist
        const existingStudent = await students.findOne({email})
        if(existingStudent){
            res.status(406).json("Student Already Exist!! ")
        }else{
            // Add as new user to db
            const newStudent = new students({
                firstname,lastname,address,email,number,gender,dob,course,password
            })
            await newStudent.save()
            res.status(200).json(newStudent)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getAllStudents = async (req,res) =>{
    try{
        const allStudents = await students.find()
        res.status(200).json(allStudents)
    }catch(err){
        res.status(401).json(err)
    }
}