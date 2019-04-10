'use strict'

const express = require('express')
const router = express.Router()

const locationController = require('./../controllers/location')

router.get('/', locationController.index)
router.get('/list', locationController.locationList)
router.get('/add', locationController.createLocationForm)
router.post('/add', locationController.postCreateLocation)
router.get('/edit/:id', locationController.updateLocationForm)
router.post('/edit/:id', locationController.putUpdateLocation)
router.get('/remove/:id', locationController.deleteLocationFrom)
router.post('/remove/:id', locationController.deleteLocation)

module.exports = router
