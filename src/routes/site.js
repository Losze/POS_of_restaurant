const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteCotroller')


router.get('/about', siteController.showabout)
router.get('/menu', siteController.showmenu)
router.get('/contact', siteController.showcontact)
router.get('/cart', siteController.showcart)
router.get('/', siteController.home)

module.exports = router;