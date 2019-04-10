'use strict'

const express = require('express')
const router = express.Router()

const indexController = require('./../controllers')

router.get('/', indexController.index)

module.exports = router
