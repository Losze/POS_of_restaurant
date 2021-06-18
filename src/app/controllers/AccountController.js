const Food = require('../models/Food');

class AccountController {
    index(req, res){
        res.render('account');
    }
    show(req,res){
        res.render('account');
    }
}

module.exports = new AccountController