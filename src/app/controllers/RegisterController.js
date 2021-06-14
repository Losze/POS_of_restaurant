const User = require('../models/User');

class RegisterController {
    
    index(req, res){
        res.render('register');
    }
    register(req,res){
        var phone = req.body.inputPhone;
        var inputPassword = req.body.inputPassword;
        var inputPassword2 = req.body.inputPassword2;
        User.findOne({phone: phone})
        .then(data=>{
            if(data){
                console.log("The phone number exists");
            }
            else
            {
                if(inputPassword == inputPassword2){
                    var formData = {};
                    formData.phone = phone;
                    formData.password = inputPassword;
                    formData.role = "customer";
                    const user = new User(formData);
                    user.save();
                    res.redirect("/");
                }
                else
                {
                    console.log("Password doesn't match");
                }
            }

        })
        .catch(err=>{
            console.log(err);
        })
    }
}

module.exports = new RegisterController