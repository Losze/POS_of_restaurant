const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const path = require('path')
const route = require('.\\routes')
const db = require('.\\config\\db')
app.use(morgan('combined'))

db.connect() // jquery, ajax post form handler
app.use(express.urlencoded(
  {
    extended: true    
  }
)) 

app.use(express.json()) // js post form handler

app.use(express.static(path.join(__dirname,'public')))
// Template engine

app.engine('hbs', handlebars({extname:'.hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource','views'))


// routes init
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})