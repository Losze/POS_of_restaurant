const Food = require('../models/Food')

class SiteController {
    index(req, res){
        // res.render('home')
        Food.find({}, function(err, foods) {
            if (!err) res.json(foods)
            else res.status(400).json({error: 'Error!!!'})
        })
    }
    show(req, res){
        res.send('home')
    }
}

module.exports = new SiteController