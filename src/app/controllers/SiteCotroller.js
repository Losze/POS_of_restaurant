class SiteController {
    index(req, res, next){
        res.render('home')
    }
    show(req, res){
        res.send('home')
    }
}

module.exports = new SiteController