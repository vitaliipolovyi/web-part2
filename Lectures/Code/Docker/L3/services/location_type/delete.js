const LocationType = require('./../../models/location-type')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  return new Promise((resolve, reject) => {
    LocationType.findByIdAndDelete(data.id, function (err, deletedLocationType) {
      if (err) {
        reject(err)
      } else {
        resolve(deletedLocationType)
      }
    })
  })
}
