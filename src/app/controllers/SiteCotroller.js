const Food = require('../models/Food')
const {multipleMongooseToObject} = require('../../resource/util/mongoose')

class SiteController {
    home(req, res){
        res.render('home')
        // else if (req.loggedin == true && req.role == 1) res.render('home1')
        // Food.find({}, function(err, foods) {
        //     if (!err) res.json(foods)
        //     else res.status(400).json({error: 'Error!!!'})
        // })
    }
    showabout(req, res){
        res.render('about')
    }
    showcontact(req, res){
        res.render('contact')
    }
    showcart(req, res){
        res.render('cart')
    }
    showmenu(req,res,next){
        Food.find({})
        .then(foods => {
            res.render('menu', {
                foods: multipleMongooseToObject(foods)
            })
        })
        .catch(next)
    }
}

module.exports = new SiteController