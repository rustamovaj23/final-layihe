const express = require("express")
const authController = require("../Controller/AuthController")
const router = express.Router()
const AuthMiddleware = require('../Middleware/AuthMiddleware')

router.post('/login', authController.login)
router.get('/user', AuthMiddleware, authController.user)

module.exports = router