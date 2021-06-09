const orderRouter = require('./order')
const siteRouter = require('./site')
const loginRouter = require('./login')

function route(app){
    app.use('/order', orderRouter)
    app.use('/login', loginRouter)    
    app.get('/:slug', siteRouter)
    app.use('/', siteRouter)
      
}

module.exports = route