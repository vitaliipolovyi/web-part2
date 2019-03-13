const button = document.querySelector('button')

const target = {
  handleEvent: function (event) {
    console.log(event)
  }
}

button.addEventListener('click', target)
