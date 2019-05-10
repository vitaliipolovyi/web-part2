const LocationType = require('./../models/location')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  return new Promise((resolve, reject) => {
    LocationType.findByIdAndDelete(data.id, function (err, deletedLocation) {
      if (err) {
        reject(err)
      } else {
        resolve(deletedLocation)
      }
    })
  })
}
