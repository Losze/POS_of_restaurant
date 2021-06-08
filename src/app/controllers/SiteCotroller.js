const Food = require('../models/Food');

class SiteController {

    index(req, res){
        res.render('home');
    }
    show(){
        res.render("home");
    }
}

module.exports = new SiteController;