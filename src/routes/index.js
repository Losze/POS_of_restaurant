const orderRouter = require('./order')
const siteRouter = require('./site')

function route(app){
    app.get('/order', orderRouter)

    app.get('/', siteRouter)
      
}

module.exports = route