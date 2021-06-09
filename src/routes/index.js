const orderRouter = require('./order')
const siteRouter = require('./site')

function route(app){

    app.use('/order', orderRouter)
    app.use('/', siteRouter)
      
}

module.exports = route