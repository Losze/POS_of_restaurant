

class OrderController {
    index(req, res){
        res.render('order')
    }
}

module.exports = new OrderController