const express = require('express')
const router = express.Router()
const studentsController = require('../Controller/studentsController')

// route for registration 
router.post('/register',studentsController.register)
// route for all students details
router.get('/students',studentsController.getAllStudents)

module.exports = router