const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    image:{
        type:String,
        required:true,
    },
    description:String,
    rate:Number,
})

module.exports = mongoose.model('movieSchema', movieSchema)