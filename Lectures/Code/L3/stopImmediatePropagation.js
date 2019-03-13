const block = document.querySelector('.container')
block.addEventListener('click', function (event) {
  console.log('It happened')
  event.stopImmediatePropagation()
})
block.addEventListener('click', function () {
  console.log('It will never happen')
})

