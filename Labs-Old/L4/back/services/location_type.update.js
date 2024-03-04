const LocationType = require('./../models/location_type')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const locationTypeData = {
    name: data.name,
    code: data.code
  }

  return new Promise((resolve, reject) => {
    LocationType.findByIdAndUpdate(
      data.id,
      { $set: locationTypeData },
      { new: true },
      function (err, updatedLocationType) {
        if (err) {
          reject(err)
        } else {
          resolve(updatedLocationType)
        }
      })
  })
}
