'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')
const locationAllService = require('./../services/location.all')
const locationCreateService = require('./../services/location.create')
const locationByIdService = require('./../services/location.byId')
const locationUpdateService = require('./../services/location.update')
const locationDeleteService = require('./../services/location.delete')

module.exports = {
  async locationList (req, res) {
    try {
      const locationList = await locationAllService()
      res.json(locationList)
    } catch (error) {
      res.status(500)
      res.json({ errors: [{ msg: error.message }] })
    }
  },
  postCreateLocation: [
    body('address')
      .isLength({ min: 1 }).trim().withMessage('Address field must be specified.'),
    body('type_id')
      .isLength({ min: 1 }).trim().withMessage('Type field must be specified and integer.'),
    sanitizeBody('address').escape(),
    sanitizeBody('type_id').escape(),
    async (req, res) => {
      const errors = validationResult(req)

      if (errors.isEmpty()) {
        try {
          const location = await locationCreateService(req.body)
          res.json(location)
        } catch (error) {
          res.status(422)
          res.json({ errors: [{ msg: errors.array() }] })
        }
      } else {
        res.status(422)
        res.json({ errors: [{ msg: errors.array() }] })
      }
    }
  ],
  putUpdateLocation: [
    body('address')
      .isLength({ min: 1 }).trim().withMessage('Address field must be specified.'),
    body('type_id')
      .isLength({ min: 1 }).trim().withMessage('Type field must be specified and integer.'),
    sanitizeBody('address').escape(),
    sanitizeBody('type_id').escape(),
    async (req, res, next) => {
      const locationData = req.body
      const location = await locationByIdService(locationData.id)
      if (!location) {
        res.status(404)
        res.json([{ errors: [ { msg: 'Not found' } ] }])
        return
      }

      const errors = validationResult(req)
      if (errors.isEmpty()) {
        try {
          const updatedLocation = await locationUpdateService(locationData)
          res.json(updatedLocation)
        } catch (error) {
          res.status(422)
          res.json({ errors: [{ msg: error.message }] })
        }
      } else {
        res.status(422)
        res.json({ errors: errors.array() })
      }
    }
  ],
  async deleteLocation (req, res) {
    const locationData = req.body
    const location = await locationByIdService(locationData.id)
    if (!location) {
      res.status(404)
      res.json([{ errors: [ { msg: 'Not found' } ] }])
      return
    }

    try {
      const deletedLocation = await locationDeleteService(locationData)
      res.json(deletedLocation)
    } catch (error) {
      res.status(422)
      res.json({ errors: [{ msg: error.message }] })
    }
  }
}
