const Food = require('../models/Food')
const {multi, mongooseToObject} = require('../../util/mongoose')

class OrderController {
    index(req, res, next){
        Food.find({})
        .then(food => res.render('order', {
            food: multi(food)
        })) 
        .catch(next)
    }
    // show(req, res){
    //     res.send('news detail')
    // }
    create(req, res){
        res.render('create')
    }

    update(req, res, next){
        Food.findById(req.params.id)
            .then(food => res.render('update', {
                food: mongooseToObject(food)
            }))
            .catch(next)
    }

    delete(req, res, next){
        Food.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/order'))
            .catch(error => {

            })
    }

    edit(req, res, next){
        Food.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/order'))
            .catch(error => {

            })
    }

    store(req, res){
        //res.json(req.body)
        const formData = req.body
        const newFood = new Food(formData)
        newFood.save()
            .then(() => res.redirect('/order'))
            .catch(error => {

            })
    }
}

module.exports = new OrderController