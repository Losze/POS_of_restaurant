const orderRouter = require('./order')
const siteRouter = require('./site')
const loginRouter = require('./login')
const cartRouter = require('./cart');
const registerRouter = require('./register');
const accountRouter = require('./account')
function route(app){
    app.use('/order', orderRouter)
    app.use('/login', loginRouter)    
    app.get('/:slug', siteRouter)
    app.use('/register', registerRouter)
    app.use('/cart',cartRouter)
    app.use('/account',accountRouter);
    app.use('/', siteRouter)
}

module.exports = route