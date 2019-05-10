'use strict'

const express = require('express')
const router = express.Router()

const locationTypeController = require('./../controllers/location_type')

router.get('/list', locationTypeController.locationTypeList)
router.post('/add', locationTypeController.postCreateLocationType)
router.post('/edit/:id', locationTypeController.putUpdateLocationType)
router.post('/remove/:id', locationTypeController.deleteLocationType)

module.exports = router
