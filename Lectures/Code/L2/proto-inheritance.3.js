'use strict'

const Super = {
  field: 'value',
  method () {
    return this.field
  }
}
const Child = {}
Child.__proto__ = Super

console.log(Child.method())
