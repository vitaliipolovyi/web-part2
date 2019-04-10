'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')
const locationAllService = require('./../services/location.all')
const locationTypeAllService = require('./../services/location_type.all')
const locationCreateService = require('./../services/location.create')
const locationByIdService = require('./../services/location.byId')
const locationUpdateService = require('./../services/location.update')

function _getMockLocation (id = null) {
  return {
    id: 12,
    address: 'Lviv',
    type_id: 32
  }
}

// function _getMockLocationType (id = null) {
//   return {
//     id: 32,
//     code: '333',
//     name: 'Office'
//   }
// }

// function _getMockLocationTypeList () {
//   return [ _getMockLocationType() ]
// }

module.exports = {
  index (req, res) {
    res.render('pages/location/index')
  },
  async locationList (req, res) {
    try {
      const locationList = await locationAllService()
      res.render('pages/location/list', { locations: locationList })
    } catch (error) {
      res.render('pages/location/list', {
        locations: [],
        errors: [{ msg: error.message }]
      })
    }
  },
  async createLocationForm (req, res) {
    try {
      const locationTypes = await locationTypeAllService()

      res.render('pages/location/add', {
        locationTypes: locationTypes
      })
    } catch (error) {
      res.render('pages/location/add', {
        locationTypes: [],
        errors: [{ msg: error.message }]
      })
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
      const locationData = req.body
      const locationTypes = await locationTypeAllService()
      const errors = validationResult(req)

      if (errors.isEmpty()) {
        try {
          await locationCreateService(req.body)
          req.flash('info', `Location "${locationData.address}" is Added`)
          res.redirect('/location/list')
        } catch (error) {
          res.render('pages/location/add', {
            locationTypes: locationTypes,
            errors: [{ msg: error.message }]
          })
        }
      } else {
        res.render('pages/location/add', {
          locationTypes: locationTypes,
          errors: errors.array()
        })
      }
    }
  ],
  async updateLocationForm (req, res, next) {
    try {
      const location = await locationByIdService(req.params.id)
      if (!location) {
        const errorServer = new Error('Not found')
        errorServer.status = 404
        next(errorServer)
        return
      }

      const locationTypes = await locationTypeAllService()

      res.render('pages/location/update', {
        location: location,
        locationTypes: locationTypes
      })
    } catch (error) {
      const errorServer = new Error(`Internal server error: ${error.message}`)
      errorServer.status = 500
      next(errorServer)
    }
  },
  putUpdateLocation: [
    body('address')
      .isLength({ min: 1 }).trim().withMessage('Address field must be specified.'),
    body('type_id')
      .isLength({ min: 1 }).trim().withMessage('Type field must be specified and integer.'),
    sanitizeBody('address').escape(),
    sanitizeBody('type_id').escape(),
    async (req, res, next) => {
      const locationData = req.body
      const locationTypes = await locationTypeAllService()

      const errors = validationResult(req)
      if (errors.isEmpty()) {
        try {
          const updatedLocation = await locationUpdateService(locationData)
          req.flash('info', `Location "#${updatedLocation.id} ${updatedLocation.address}" is Updated`)
          res.redirect('/location/list')
        } catch (error) {
          res.render('pages/location/update', {
            location: {},
            newLocation: locationData,
            locationTypes: locationTypes,
            errors: [{ msg: error.message }]
          })
        }
      } else {
        res.render('pages/location/update', {
          location: {},
          newLocation: locationData,
          locationTypes: locationTypes,
          errors: errors.array()
        })
      }
    }
    // const success = true
    // const locationData = req.body
    // const mockLocation = _getMockLocation(locationData.id)

    // if (success) {
    //   req.flash('info', `Location "#${mockLocation.id} ${mockLocation.address}" is Updated`)
    //   res.redirect('/location/list')
    // } else {
    //   const mockLocationTypes = _getMockLocationTypeList()

    //   res.render('pages/location/update', {
    //     location: mockLocation,
    //     newLocation: locationData,
    //     locationTypes: mockLocationTypes,
    //     errors: [{ 'msg': 'Error Omg' }]
    //   })
    // }
  ],
  deleteLocationFrom (req, res) {
    const mockLocation = _getMockLocation(req.body.id)

    res.render('pages/location/delete', { location: mockLocation })
  },
  deleteLocation (req, res) {
    const success = true
    const locationData = req.body
    const mockLocation = _getMockLocation(locationData.id)

    if (success) {
      req.flash('info', `Location "#${mockLocation.id} ${mockLocation.address}" is Deleted`)
      res.redirect('/location/list')
    } else {
      res.render('pages/location/delete', {
        location: mockLocation,
        errors: [{ 'msg': 'Error Omg' }]
      })
    }
  }
}
