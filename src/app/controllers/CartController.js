const foodModel = require('../models/Food');
const cartModel = require('../models/Cart');

const jwt = require("jsonwebtoken")
class CartController {
    index(req, res){
        var token = req.cookies.token;
        var User = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        cartModel.findOne({phone: User.phone,})
        .then(cart=>{
            var listItem = [];
            var itemCode = Object.keys(cart.cart);
            for(let i=0; i<itemCode.length; i++){
                console.log(itemCode[i]);
                var itemInfo = {
                    name: "",
                    image: "",
                    price: "",
                    number: ""
                };
                itemInfo.number = data.cart[0].number;
                foodModel.findOne({code: itemCode[i]})
                .then(food=>{
                    itemInfo.name = food.name;
                    itemInfo.image = food.image;
                    itemInfo.price = food.price;
                })
                .catch(err=>{

                })
                listItem.push(itemInfo);
            }
            res.render('cart',{
                listItem: listItem,
                size: itemCode.length
            });
        })
        .catch(err=>{
            console.log(err);
        })
        
    }
    
}

module.exports = new CartController