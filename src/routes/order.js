const express = require('express')
const router = express.Router()

const orderController = require('../app/controllers/OrderCotroller')

router.get('/:slug', orderController.index)

router.get('/', orderController.index)



module.exports = router