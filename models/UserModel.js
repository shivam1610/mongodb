const mongoose = require('mongoose')
const Sechma =  mongoose.Schema

const userSechma = new Sechma({
    nmae:{
        type: String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    password: {
        type: String
    }
}, {timestamps: true})

const User = mongoose.model('User',  userSechma)
module.exports = User