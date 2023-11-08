const LocationType = require('./../../models/location-type')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const locationType = new LocationType({
    name: data.name,
    code: data.code
  })

  return new Promise((resolve, reject) => {
    locationType.save(function (err, createdLocationType) {
      if (err) {
        reject(err)
      } else {
        resolve(createdLocationType)
      }
    })
  })
}
