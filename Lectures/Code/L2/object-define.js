'use strict'

const user = { name: 'Root' }

Object.defineProperty(user, 'locked', {
  value: true,
  writable: false,
  configurable: false,
  enumerable: true
})

// user.locked = false
// delete user.locked

console.log(user)
for (const prop in user) {
  console.log(prop, user[prop])
}
