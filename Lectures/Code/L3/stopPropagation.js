const block = document.querySelector('.container')
const row = document.querySelector('.row')

row.addEventListener('click', function (event) {
  console.log('It happened')
  event.stopPropagation()
}, false)

block.addEventListener('click', function (event) {
  console.log('It will never happen')
}, false)
