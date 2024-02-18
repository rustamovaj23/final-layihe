const express = require("express")
const ProductsController = require("../Controller/ProductsController")
const router = express.Router()
const AuthMiddleware = require('../Middleware/AuthMiddleware')

router.post('/', AuthMiddleware, ProductsController.create)
router.get('/:id', ProductsController.getById)
router.get('/', ProductsController.getAll)
router.post('/get_by_category', ProductsController.getByCategory)
router.post('/filter', ProductsController.filter)
router.delete('/:id', AuthMiddleware, ProductsController.delete)
router.put('/:id', AuthMiddleware, ProductsController.update)

module.exports = router