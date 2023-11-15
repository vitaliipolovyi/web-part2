'use strict'

const express = require('express')
const router = express.Router()
const authCheck = require('./../middlewares/auth') 

const locationTypeController = require('../controllers/location-type')

router.get('/', authCheck, locationTypeController.locationTypeList)
router.get('/:id', authCheck, locationTypeController.getLocationTypeById)
router.post('/', authCheck, locationTypeController.postCreateLocationType)
router.put('/:id', authCheck, locationTypeController.putUpdateLocationType)
router.delete('/:id', authCheck, locationTypeController.deleteLocationType)

module.exports = router
