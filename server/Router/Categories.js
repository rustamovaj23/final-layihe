const express = require("express")
const CategoriesController = require("../Controller/CategoriesController")
const router = express.Router()
const AuthMiddleware = require('../Middleware/AuthMiddleware')

router.post('/', AuthMiddleware, CategoriesController.create)
router.get('/:id', CategoriesController.getById)
router.get('/', CategoriesController.getAll)
router.delete('/:id', AuthMiddleware, CategoriesController.delete)
router.put('/:id', AuthMiddleware, CategoriesController.update)

module.exports = router