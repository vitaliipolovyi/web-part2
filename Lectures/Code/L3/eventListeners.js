const button = document.querySelector('button')
const callback = function (event) {
  console.log('Btn click')
}

button.addEventListener('click', callback, false)

// **** //

button.removeEventListener('click', callback, false)

button.addEventListener('click', callback.bind(context), false)
