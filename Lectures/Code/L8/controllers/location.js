'use strict'

function _getMockLocation (id = null) {
  return {
    id: 12,
    address: 'Lviv',
    type_id: 32
  }
}

function _getMockLocationList (id = null) {
  return [ _getMockLocation() ]
}

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
    res.render('pages/location/index')
  },
  locationList (req, res) {
    const mockLocationList = _getMockLocationList()

    res.render('pages/location/list', { locations: mockLocationList })
  },
  createLocationForm (req, res) {
    const mockLocationTypes = _getMockLocationTypeList()

    res.render('pages/location/add', {
      locationTypes: mockLocationTypes
    })
  },
  postCreateLocation (req, res) {
    const success = true
    const locationData = req.body

    if (success) {
      req.flash('info', `Location "${locationData.address} ${locationData.type_id}" is Added`)
      res.redirect('/location/list')
    } else {
      const mockLocationTypes = _getMockLocationTypeList()

      res.render('pages/location/add', {
        newLocation: locationData,
        locationTypes: mockLocationTypes,
        errors: [{ 'msg': 'Error Omg' }]
      })
    }
  },
  updateLocationForm (req, res) {
    const mockLocation = _getMockLocation(req.body.id)
    const mockLocationTypes = _getMockLocationTypeList()

    res.render('pages/location/update', {
      location: mockLocation,
      locationTypes: mockLocationTypes
    })
  },
  putUpdateLocation (req, res) {
    const success = true
    const locationData = req.body
    const mockLocation = _getMockLocation(locationData.id)

    if (success) {
      req.flash('info', `Location "#${mockLocation.id} ${mockLocation.address}" is Updated`)
      res.redirect('/location/list')
    } else {
      const mockLocationTypes = _getMockLocationTypeList()

      res.render('pages/location/update', {
        location: mockLocation,
        newLocation: locationData,
        locationTypes: mockLocationTypes,
        errors: [{ 'msg': 'Error Omg' }]
      })
    }
  },
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
