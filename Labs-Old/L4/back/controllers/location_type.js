'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')
const locationTypeAllService = require('./../services/location_type.all')
const locationTypeCreateService = require('./../services/location_type.create')
const locationTypeByIdService = require('./../services/location_type.byId')
const locationTypeUpdateService = require('./../services/location_type.update')
const locationTypeDeleteService = require('./../services/location_type.delete')

module.exports = {
  locationTypeList (req, res) {
    locationTypeAllService()
      .then(locationTypeList => {
        res.json(locationTypeList)
      })
      .catch(error => {
        res.status(500)
        res.json({ errors: [{ msg: error.message }] })
      })
  },
  postCreateLocationType: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('code')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('code').escape(),
    (req, res) => {
      const errors = validationResult(req)

      if (errors.isEmpty()) {
        locationTypeCreateService(req.body)
          .then(locationType => {
            res.json(locationType)
          })
          .catch(error => {
            res.status(422)
            res.json({ errors: [{ msg: error.message }] })
          })
      } else {
        res.status(422)
        res.json({ errors: errors.array() })
      }
    }
  ],
  putUpdateLocationType: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('code')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('code').escape(),
    (req, res, next) => {
      const locationTypeData = req.body

      const errors = validationResult(req)
      if (errors.isEmpty()) {
        locationTypeByIdService(locationTypeData.id)
          .then(locationType => {
            if (locationType) {
              return locationTypeUpdateService(locationType)
            } else {
              res.status(404)
              res.json([{ errors: [ { msg: 'Not found' } ] }])
            }
          })
          .then(locationType => {
            res.json(locationType)
          })
          .catch(error => {
            res.status(422)
            res.json({ errors: [{ msg: error.message }] })
          })
      } else {
        res.status(422)
        res.json({ errors: errors.array() })
      }
    }
  ],
  deleteLocationType (req, res, next) {
    locationTypeByIdService(req.body.id)
      .then(locationType => {
        if (locationType) {
          return locationTypeDeleteService(locationType)
        } else {
          res.status(404)
          res.json([{ errors: [ { msg: 'Not found' } ] }])
        }
      })
      .then(locationType => {
        req.json(locationType)
      })
      .catch(error => {
        res.status(422)
        res.json({ errors: [{ msg: error.message }] })
      })
  }
}
