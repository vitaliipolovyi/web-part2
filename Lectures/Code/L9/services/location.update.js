const Location = require('./../models/location')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  console.log(data)
  const location = {
    address: data.address,
    type: data.type_id
  }

  return new Promise((resolve, reject) => {
    Location.findByIdAndUpdate(
      data.id,
      { $set: location },
      { new: true },
      function (err, updatedLocation) {
        if (err) {
          reject(err)
        } else {
          resolve(updatedLocation)
        }
      })
  })
}
