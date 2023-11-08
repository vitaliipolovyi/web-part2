const User = require('../../models/user')

/**
 * @param {Object} data
 */
module.exports = function (username) {
  return new Promise((resolve, reject) => {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        reject(err)
      } else {
        resolve(user)
      }
    })
  })
}
