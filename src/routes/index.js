const siteRouter = require('./site');
const accountRouter = require('./account');

function route(app){
    app.get('/', siteRouter);
    app.get('/account',accountRouter);
}

module.exports = route