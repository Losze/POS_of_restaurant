const mongoose = require('mongoose')
const Schema = mongoose.Schema

const order = new Schema({
    food: {type: Array},
    price: {type: Array},
    amount: {type: Array}
})

module.exports = mongoose.model('order', order)