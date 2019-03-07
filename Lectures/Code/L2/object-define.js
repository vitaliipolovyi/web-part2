'use strict'

const user = { name: 'Root' }

Object.defineProperty(user, 'locked', {
  value: true,
  writable: false,
  configurable: false,
  enumerable: false
})

// user.locked = false
// delete user.locked

for (const prop in user) {
  console.log(prop, user[prop])
}
