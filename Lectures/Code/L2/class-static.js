'use strict'

class Ticket {
  constructor (no, price) {
    this.no = no
    this.price = price
    this.validated = false
  }
  Validate () {
    console.log(this)
    this.validated = true
  }
  static Stringify (ticket) {
    console.log(this)
    return `#${ticket.no} ${ticket.price}`
  }
}

const trainTicket = new Ticket(1, 200.10)
trainTicket.Validate()
console.log(Ticket.Stringify(trainTicket))
