const Location = require('./../models/location')

/**
 * @param {Object} data
 */
module.exports = function (id) {
  return new Promise((resolve, reject) => {
    Location.findById(id, function (err, location) {
      if (err) {
        reject(err)
      } else {
        resolve(location)
      }
    })
  })
}
