// const notEmpty = Object.create({}) // {}
// console.log(notEmpty.hasOwnProperty('name'))
// console.dir(notEmpty)

const empty = Object.create(null)
// empty.toString = Object.toString
// empty.toString()

empty.prototype = {}
empty.prototype.toString = Object.toString
empty.toString = toString

console.dir(empty)
console.log(empty.toString())

const o = Object.create({}, { p: { value: 42 } })
console.log(o.p)
