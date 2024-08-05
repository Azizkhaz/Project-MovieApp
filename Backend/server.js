// importation lel dotenv
require('dotenv').config()

// importation lel express 
const express = require('express')
const app = express()

// importation lel cors

const cors = require('cors')

// l port eli bech ne5edmoui aalyh

const port = process.env.port

// importation lel mongoose 

const connectdb = require('./config/connectdb')
// importation routes 
const movieRoute = require('./routes/movieRoute')

connectdb()




app.use(express.json())

app.use(cors())


app.use('/movie', movieRoute)




app.listen(port,err =>{
    err?console.log(err):console.log(`go to the port ${port}`)
})