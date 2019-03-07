// встановлюємо express
const express = require('express')
const app = express()

// встановлюємо директорію для віддачі статичного контенту (каталог проекту)
app.use(express.static(__dirname))

// налаштовуємо роботу із шалонізаотором
app.set('views', './static/views')
app.set('view engine', 'pug')

// налаштовуємо маршрутизацію
app.get('/', function (request, response) {
  response.render('pages/index', { title: 'Home' })
})
app.get('/shop', function (request, response) {
  response.render('pages/shop', { title: 'Shop' })
})

// запускаємо аплікацію
app.listen(process.env.PORT || 8080)
