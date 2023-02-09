const button = document.querySelector('button')
const callback = function (event) {
  console.log(this)
  console.log('Btn click')
}

class Caller {
  doClick() {}
}
button.addEventListener('click', callback.bind(new Caller()), false)
// button.addEventListener('click', callback, false)

// **** //

button.removeEventListener('click', callback, false)

button.addEventListener('click', callback.bind(context), false)
