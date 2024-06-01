const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const PORT = process.env.PORT

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({ origin: "http://localhost:3000" }));


app.use('/',require('./routes/playlist'));

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