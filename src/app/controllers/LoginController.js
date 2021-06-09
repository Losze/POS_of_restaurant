var session = require('express-session')
var bodyParser = require("body-parser")
const User = require('../models/User')

class LoginController {

    // GET method
    index(req, res){

        res.render('login')


    }
    // POST login method
    signin(req, res){

        var phone = req.body.phone
        var password = req.body.password
        console.log(phone)
        console.log(password)
        if (phone && password){
            User.findOne({phone:phone, password:password}).exec((err, user) =>
            {
                if (err){
                    res.status(500).send({message: err})
                }
                if (user){
                    var role = user.role 
                    console.log(role)
                    req.session.loggedin = true
                    req.session.username = phone
                    res.redirect('..')
                }
                else{
                    res.redirect("/login")
                }
            }
            )
        }
        else{
            res.send("Please enter Username and Password")
        }
    }
}

module.exports = new LoginController