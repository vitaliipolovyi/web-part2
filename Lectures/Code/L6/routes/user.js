const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('Users Home')
})

router.get('/:id', function (req, res) {
  res.send(req.params)
})

router.post('/:id', function (req, res) {
  console.log(req.body)
  res.send(req.params)
})

module.exports = router
