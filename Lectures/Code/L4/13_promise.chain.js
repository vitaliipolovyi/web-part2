function getImage (image) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest()
    request.open('GET', image)
    request.responseType = 'blob'
    request.onload = function () {
      console.log('Image fetched')
      resolve(request.response)
    }
    request.onerror = function () {
      reject(new Error('An error occured'))
    }

    request.send()
  })
}

function loadImage (data) {
  console.log(data)
  return new Promise(function (resolve, reject) {
    const image = new Image()
    image.onload = function () {
      console.log('Image loaded')
      resolve(this)
    }
    const url = URL.createObjectURL(data)
    console.log(url)
    image.src = url
  })
}

function drawImage (image) {
  document.body.appendChild(image)
}

getImage('eventflow.png')
  .then(loadImage)
  .then(drawImage)
  .catch(error => {
    console.error(error)
  })
