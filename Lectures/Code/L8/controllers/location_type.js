'use strict'

const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')

function _getMockLocationType (id = null) {
  return {
    id: 32,
    code: '333',
    name: 'Office'
  }
}

function _getMockLocationTypeList () {
  return [ _getMockLocationType() ]
}

module.exports = {
  index (req, res) {
    res.render('pages/location_type/index')
  },
  locationTypeList (req, res) {
    const mockLocationTypeList = _getMockLocationTypeList()

    res.render('pages/location_type/list', { locationTypes: mockLocationTypeList })
  },
  createLocationTypeForm (req, res) {
    res.render('pages/location_type/add')
  },
  postCreateLocationType: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('code')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('code').escape(),
    (req, res) => {
      const locationTypeData = req.body

      const errors = validationResult(req)
      if (errors.isEmpty()) {
        req.flash('info', `Location Type "${locationTypeData.name}" is Added`)
        res.redirect('/location-type/list')
      } else {
        res.render('pages/location_type/add', {
          newLocationType: locationTypeData,
          errors: errors.array()
        })
      }
    }
  ],
  updateLocationTypeForm (req, res) {
    const mockLocationType = _getMockLocationType()

    res.render('pages/location_type/update', { locationType: mockLocationType })
  },
  putUpdateLocationType: [
    body('name')
      .isLength({ min: 1 }).trim().withMessage('Name field must be specified.'),
    body('code')
      .isLength({ min: 1 }).trim().withMessage('Code field must be specified.'),
    sanitizeBody('name').escape(),
    sanitizeBody('code').escape(),
    (req, res) => {
      const locationTypeData = req.body
      const mockLocationType = _getMockLocationType(locationTypeData.id)

      const errors = validationResult(req)
      if (errors.isEmpty()) {
        req.flash('info', `Location Type "#${mockLocationType.id} ${mockLocationType.name}" is Updated`)
        res.redirect('/location-type/list')
      } else {
        res.render('pages/location_type/update', {
          locationType: mockLocationType,
          newLocationType: locationTypeData,
          errors: errors.array()
        })
      }
    }
  ],
  deleteLocationTypeFrom (req, res) {
    const locationTypeData = req.body
    const mockLocationType = _getMockLocationType(locationTypeData.id)

    res.render('pages/location_type/delete', { locationType: mockLocationType })
  },
  deleteLocationType (req, res) {
    const success = true
    const locationTypeData = req.body
    const mockLocationType = _getMockLocationType(locationTypeData.id)

    if (success) {
      req.flash('info', `Location Type "#${mockLocationType.id} ${mockLocationType.name}" is Deleted`)
      res.redirect('/location-type/list')
    } else {
      res.render('pages/location_type/delete', {
        locationType: mockLocationType,
        errors: [{ 'msg': 'Error Omg' }]
      })
    }
  }
}
