class Authenticate{
    isLoggedIn(req, res, next){
        if (req.isAutheticated())
            return next()
        res.redirect('/')
    }
}

module.exports = new Authenticate