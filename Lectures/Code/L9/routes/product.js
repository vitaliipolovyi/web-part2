'use strict'

const express = require('express')
const router = express.Router()

const productController = require('./../controllers/product')

router.get('/', productController.index)
router.get('/list', productController.productList)
router.get('/add', productController.createProductForm)
router.post('/add', productController.postCreateProduct)
router.get('/edit/:id', productController.updateProductForm)
router.post('/edit/:id', productController.putUpdateProduct)
router.get('/remove/:id', productController.deleteProductFrom)
router.post('/remove/:id', productController.deleteProduct)

module.exports = router
