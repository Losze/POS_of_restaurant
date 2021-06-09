const express = require('express')
const router = express.Router()

const accountController = require('../app/controllers/AccountController')

// router.use('/:slug', accountController.show)

router.use('/', accountController.index)

module.exports = router