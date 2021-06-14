
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema({
    phone: {type: String},
    cart: {type: Object}
})

module.exports = mongoose.model('Cart', Cart)