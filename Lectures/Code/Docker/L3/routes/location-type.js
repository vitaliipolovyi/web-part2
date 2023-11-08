'use strict'

const express = require('express')
const router = express.Router()

const locationTypeController = require('../controllers/location-type')

router.get('/', locationTypeController.locationTypeList)
router.get('/:id', locationTypeController.getLocationTypeById)
router.post('/', locationTypeController.postCreateLocationType)
router.put('/:id', locationTypeController.putUpdateLocationType)
router.delete('/:id', locationTypeController.deleteLocationType)

module.exports = router
