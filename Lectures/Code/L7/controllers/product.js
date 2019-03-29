'use strict'

module.exports = {
  index (req, res) {
    res.render('pages/product/index')
  },
  create (req, res) {
    res.render('pages/product/add')
  },
  postCreate (req, res) {
    res.send(req.body)
  }
}
