const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  throw new Error('Smth Happened')
  res.send('Users Home')
})

module.exports = router
