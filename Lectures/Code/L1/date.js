const someDate = new Date()

console.log(someDate.toDateString())
console.log(someDate.toString())
console.log(someDate.toISOString())
console.log(someDate.toUTCString())
// deprecated
console.log(someDate.toGMTString())

console.log('1) ---------------------------')

console.log(someDate.toLocaleDateString())
console.log(someDate.toLocaleDateString('en-GB'))

console.log('2) ---------------------------')

const time = someDate.getTime() / 1000
console.log(time)
console.log(someDate.getTimezoneOffset())
console.log(time + someDate.getTimezoneOffset() * 60)

console.log('3) ---------------------------')

const newDate = new Date('2017-07-01T23:59:59')
console.log(newDate.toISOString())
const utcDate = new Date('2017-07-01T23:59Z')
console.log(utcDate.toISOString())
const withTzDate1 = new Date('2017-07-01T23:59:59-02:00')
console.log(withTzDate1.toISOString())
const withTzDate2 = new Date('2017-07-01T23:59:59+02:00')
console.log(withTzDate2.toISOString())

const currentDate = new Date()
const hour = currentDate.getHours()
const minute = currentDate.getMinutes()
const second = currentDate.getSeconds()

console.log('4) ---------------------------')

console.log(currentDate, hour, minute, second)

console.log('5) ---------------------------')

console.log(currentDate, currentDate.getFullYear(), currentDate.getDay(), currentDate.getMonth())

// currentDate.setTi(2023)
// console.log(currentDate.getFullYear())

const dateObj = new Date()
console.log(dateObj.valueOf())