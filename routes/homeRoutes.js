const { Router } = require('express')
const router     = Router()
const { requireAuth } = require('../Middlewares/authMiddleware.js')
// Auth Controller
const homeController = require('../Controllers/homeController.js')
router.get('/home', requireAuth,  homeController.loadHome)

module.exports = router