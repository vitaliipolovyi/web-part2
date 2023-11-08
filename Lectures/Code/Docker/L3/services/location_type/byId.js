const LocationType = require('./../../models/location-type')

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
