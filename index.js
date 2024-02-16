require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/routes')
require('./DB/connection')

const srServer = express()

srServer.use(cors())
srServer.use(express.json())
srServer.use(router)

const PORT = 3000 || process.env.PORT

srServer.listen(PORT,()=>{
    console.log(`Server is now online at port : ${PORT}`);
})

srServer.get('/',(req,res)=>{
    res.status(200).send("<h1 style=color:blue>Student registration form server is online!! Waiting for client request...</h1>")
})