const LocationType = require('./../models/location_type')

/**
 * @param {Object} data
 */
module.exports = function (id) {
  return new Promise((resolve, reject) => {
    LocationType.findById(id, function (err, locationType) {
      if (err) {
        reject(err)
      } else {
        resolve(locationType)
      }
    })
  })
}
