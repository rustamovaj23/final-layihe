const express = require("express")
const authController = require("../Controller/AuthController")
const router = express.Router()
const AuthMiddleware = require('../Middleware/AuthMiddleware')

router.post('/login', authController.login)
router.get('/user', AuthMiddleware, authController.user)
router.post('/sendMail', authController.sendMail)
router.post('/register', authController.register)
module.exports = router