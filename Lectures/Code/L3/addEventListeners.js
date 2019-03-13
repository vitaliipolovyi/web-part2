const button = document.querySelector('button')
const callback = function (event) {
  console.log('Btn click')
}

const useCapture = true

button.addEventListener('click', callback, useCapture)

// **** //

const options = {
  capture: true,
  once: false, // --> викликається тільки один раз
  passive: false // --> не викликає preventDefault
}

button.addEventListener('click', callback, options)
