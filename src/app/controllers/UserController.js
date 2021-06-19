const Food = require('../models/Food')
const cartModel = require('../models/Cart');
const jwt = require('jsonwebtoken');
const orderModel = require('../models/Order');
const { multipleMongooseToObject } = require('../../resource/util/mongoose');
const { updateOne } = require('../models/Food');
const Usr = require('../models/User')



class UserController {
    user(req, res, next) {
        Usr.find({role: "customer"})
            .then(user => res.render('userManagement', {
                user: multipleMongooseToObject(user)
            }))
    }

    delete(req, res, next){
        Usr.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/user'))
            .catch(error => {

            })
    }
}

module.exports = new UserController;