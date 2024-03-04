const Location = require('./../models/location')

/**
 * @param {Object} data
 */
module.exports = function () {
  return new Promise((resolve, reject) => {
    Location.find({})
      .populate('type')
      .exec(function (err, locations) {
        if (err) {
          reject(err)
        } else {
          console.log(locations)
          resolve(locations)
        }
      })
  })
}
