'use strict'

const user = { name: 'Root', locked: false }

// Object.preventExtensions(user)
// console.log(Object.isExtensible(user))
// // user.role = 'admin'
// delete user.locked
// user.name = 'Nginx'
// console.dir(user)

// Object.seal(user)
// console.log(Object.isSealed(user))
// user.role = 'admin'
// delete user.locked
// user.name = 'Nginx'
// console.dir(user)

Object.freeze(user)
console.log(Object.isFrozen(user))
// user.role = 'admin'
// delete user.locked
// user.name = 'Nginx'
console.dir(user)
