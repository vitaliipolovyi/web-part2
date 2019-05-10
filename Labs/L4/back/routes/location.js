'use strict'

const express = require('express')
const router = express.Router()

const locationController = require('./../controllers/location')

router.get('/list', locationController.locationList)
router.post('/add', locationController.postCreateLocation)
router.post('/edit/:id', locationController.putUpdateLocation)
router.post('/remove/:id', locationController.deleteLocation)

module.exports = router
