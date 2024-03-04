const Location = require('./../models/location')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const location = new Location({
    address: data.address,
    type: data.type_id
  })

  return new Promise((resolve, reject) => {
    location.save(function (err, createdLocation) {
      if (err) {
        reject(err)
      } else {
        resolve(createdLocation)
      }
    })
  })
}
