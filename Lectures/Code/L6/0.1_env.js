'use strict'

const express = require('express')

const app = express()

console.log(process.env)

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 8080

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})

// HOST=localhost1 PORT=8090 node 0_env.js
// SET HOST=localhost1 & SET PORT=8090 & node 0_env.js
// $env:HOST="localhost1"; $env:PORT=8090; node 0_env.js
