const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteCotroller')
const authController = require('../app/middlewares/auth');
const cartController = require('../app/controllers/CartController')
router.get('/about', siteController.showabout)
router.get('/menu', siteController.showmenu)
router.get('/contact', siteController.showcontact)
router.get('/cart', cartController.index)
router.get('/', siteController.home)

module.exports = router;