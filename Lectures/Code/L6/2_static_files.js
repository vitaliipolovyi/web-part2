'use strict'

const express = require('express')
const path = require('path')

const app = express()
const { host, port } = require('./config')

// встановлюємо директорію для віддачі статичного контенту (каталог проекту)
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => res.send('Static Files'))

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
