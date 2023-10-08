'use strict'

const object = {
  prop1: 'val1',
  prop2: 'val1',
  propDel: 'del'
}

console.log(object.prototype)

delete object.propDel

console.log(object.propDel)
console.log(object)
