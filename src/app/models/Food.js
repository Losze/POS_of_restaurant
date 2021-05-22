const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Food = new Schema({
    name: {type: String},
    description: {type: String},
    price: {type: String},
    image: {type: String}
})

module.exports = mongoose.model('Food', Food)