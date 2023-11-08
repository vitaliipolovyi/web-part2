const LocationType = require('./../../models/location-type')

/**
 * @param {Object} data
 */
module.exports = function () {
  return new Promise((resolve, reject) => {
    LocationType.find({}, function (err, locationTypes) {
      if (err) {
        reject(err)
      } else {
        resolve(locationTypes)
      }
    })
  })
}
