const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT

app.get("/", (req,res)=>{
    res.send("Hello World")
})

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>{
    console.log("Database Connected")
    app.listen(PORT, ()=>{
        console.log(`Server is running on port http://localhost:${PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})