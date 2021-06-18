const Food = require('../models/Food')
const cartModel = require('../models/Cart');
const jwt = require('jsonwebtoken');
const { multipleMongooseToObject } = require('../../resource/util/mongoose');
const { updateOne } = require('../models/Food');

class SiteController {
    home(req, res) {
        res.render('home')
        // else if (req.loggedin == true && req.role == 1) res.render('home1')
        // Food.find({}, function(err, foods) {
        //     if (!err) res.json(foods)
        //     else res.status(400).json({error: 'Error!!!'})
        // })
    }
    showabout(req, res) {
        res.render('about')
    }
    showcontact(req, res) {
        res.render('contact')
    }

    showmenu(req, res, next) {
        Food.find({})
            .then(foods => {
                res.render('menu', {
                    foods: multipleMongooseToObject(foods)
                })
            })
            .catch(next)
    }

    addToCart(req, res, next) {
        var token = req.cookies.token;
        var User = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        var data = req.body;
        var codeFood = data.code;
        var num = data.number;
        
        cartModel.findOne({ phone: User.phone, })
            .then(cart => {
                console.log("start");
                var consCart = cart.cart;
                console.log(consCart);
                let itemCode = Object.keys(cart.cart);
                var exist = false;
                for (let i = 0; i < itemCode.length; i++) {
                    if (itemCode[i] == codeFood) {
                        consCart[codeFood].number = num;
                        exist = true;
                    }
                }
                if (!exist) {
                    consCart[codeFood] = {
                        "number": num,
                    }
                }
                return consCart;
            })
            .then(consCart => {
                cartModel.deleteOne({ phone: User.phone })
                    .then(() => {
                        var newCart = {};
                        newCart.phone = User.phone;
                        newCart.cart = consCart;
                        const SaveCart = new cartModel(newCart);
                        SaveCart.save();

                    });
            })
            .catch(err => {
                console.log(err);
            })


    }
}

module.exports = new SiteController;