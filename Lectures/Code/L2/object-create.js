const notEmpty = Object.create({}) // {}
console.log(notEmpty.hasOwnProperty('name'))
console.dir(notEmpty)

const empty = Object.create(null)
empty.name = 'TEST'
// empty.toString = Object.toString
// empty.toString()
//console.log(Object.toString)
empty.prototype = {}
empty.prototype.toString = function() {
    return this.name
}
// empty.toString = toString

console.dir(empty)
console.log(empty.prototype.toString())

const o = Object.create({}, { p: { value: 42 } })
console.log(o.p)
