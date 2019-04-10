'use strict'

const express = require('express')
const router = express.Router()

const locationTypeController = require('./../controllers/location_type')

router.get('/', locationTypeController.index)
router.get('/list', locationTypeController.locationTypeList)
router.get('/add', locationTypeController.createLocationTypeForm)
router.post('/add', locationTypeController.postCreateLocationType)
router.get('/edit/:id', locationTypeController.updateLocationTypeForm)
router.post('/edit/:id', locationTypeController.putUpdateLocationType)
router.get('/remove/:id', locationTypeController.deleteLocationTypeFrom)
router.post('/remove/:id', locationTypeController.deleteLocationType)

module.exports = router
