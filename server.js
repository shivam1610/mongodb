const express  = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const EmployeeRoute = require('./routes/EmployeeRoutes.js')
const AuthRoute = require('./routes/AuthRoute.js')

mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error',(err) => (
    console.log(err)
))

db.once('open', () => {
    console.log('Database connection established')
})


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

//Main api url
app.use('/api/employee', EmployeeRoute)
app.use('/api', AuthRoute)