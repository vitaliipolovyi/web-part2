'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')
const locationTypeAllService = require('./../services/location_type/all')
const locationTypeCreateService = require('./../services/location_type/create')
const locationTypeByIdService = require('./../services/location_type/byId')
const locationTypeUpdateService = require('./../services/location_type/update')
const locationTypeDeleteService = require('./../services/location_type/delete')

module.exports = {
  /**
   * @param {import('express').Request} req 
   * @param {import('express').Response} res 
   */
  async locationTypeList(req, res) {
    try {
      const locationTypeList = await locationTypeAllService()

      res.status(200).json({
        locationTypes: locationTypeList
      })
    } catch (e) {
      res.status(400).json({
        locationTypes: [],
        errors: [{ msg: e.message }]
      })
    }
  },
  /**
   * @param {import('express').Request} req 
   * @param {import('express').Response} res 
   */
  async getLocationTypeById(req, res) {
    try {
      const locationType = await locationTypeByIdService(req.params.id)
      if (locationType) {
        res.status(200).json({
          status: 200,
          locationType: locationType
        })
      } else {
        const errorNotFound = new Error('Not found')
        errorNotFound.status = 404
        next(errorNotFound)
      }
    } catch(e) {
      res.status(400).json({
        status: 400,
        errors: [{ msg: e.message }]
      })
    }
  },
  postCreateLocationType: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('code')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('code').escape(),
    /**
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    async (req, res) => {
      const locationTypeData = req.body
      const errors = validationResult(req)

      if (errors.isEmpty()) {
        try {
          const createdLocationType = await locationTypeCreateService(req.body)

          res.status(201).json({
            status: 201,  
            id: createdLocationType.id,
            info: `Location Type "${locationTypeData.name}" is added`
          })
        } catch(e) {
          res.status(400).json({
            status: 400,
            errors: [{ msg: e.message }]
          })
        }
      } else {
        res.status(422).json({
          status: 422,
          errors: errors.array()
        })
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
    /**
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     * @param {Function} next
     */
    async(req, res, next) => {
      const locationTypeData = req.body

      const errors = validationResult(req)
      if (errors.isEmpty()) {
        try {
          const locationType = await locationTypeByIdService(req.params.id)
          if (locationType) {
            locationTypeData.id = req.params.id
              
            const updatedLocationType = await locationTypeUpdateService(locationTypeData)

            res.status(200).json({
              status: 200,
              info: `Location Type "#${updatedLocationType.id} ${updatedLocationType.name}" is updated`
            })
          } else {
            const errorNotFound = new Error('Not found')
            errorNotFound.status = 404
            next(errorNotFound)
          }
        } catch(e) {
          res.status(400).json({
            status: 400,
            errors: [{ msg: e.message }]
          })
        }
      } else {
        res.status(422).json({
          status: 422,
          errors: errors.array()
        })
      }
    }
  ],
  /**
   * @param {import('express').Request} req 
   * @param {import('express').Response} res 
   * @param {Function} next
   */
  async deleteLocationType(req, res, next) {
    try {
      const locationType = await locationTypeByIdService(req.params.id)
      if (locationType) {
        const locationType = await locationTypeDeleteService(req.body)

        res.status(200).json({
          status: 200,
          info: `Location Type "#${locationType.id} ${locationType.name}" is deleted`
        })
      } else {
        const errorNotFound = new Error('Not found')
        errorNotFound.status = 404
        next(errorNotFound)
      }
    } catch (e) {
      res.render('pages/location_type/delete', {
        locationType: req.body,
        errors: [{ msg: e.message }]
      })
    }
  }
}
