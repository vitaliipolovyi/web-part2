'use strict'

const express = require('express')
const router = express.Router()

const productController = require('./../controllers/product')

router.get('/', productController.index)
router.get('/add', productController.create)
router.post('/create', productController.postCreate)

module.exports = router
