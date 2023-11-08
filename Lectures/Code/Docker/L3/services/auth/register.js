const User = require('../../models/user')
const bcrypt = require('bcryptjs')

/**
 * @param {Object} data
 */
module.exports = function (data) {
  const locationType = new User({
    fullName: data.fullName,
    username: data.username,
    password: bcrypt.hashSync(data.password, /** salt */ 10),
  })

  return new Promise((resolve, reject) => {
    locationType.save(function (err, createdUser) {
      if (err) {
        reject(err)
      } else {
        resolve(createdUser)
      }
    })
  })
}
