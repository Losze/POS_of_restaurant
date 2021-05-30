

class OrderController {
    index(req, res){
        res.render('order')
    }
    show(req, res){
        res.send('news detail')
    }
}

module.exports = new OrderController