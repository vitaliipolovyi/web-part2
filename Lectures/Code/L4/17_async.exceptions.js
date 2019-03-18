console.log('Await')

function getImage (image) {
  // throw new Error('Requested image not found')
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest()
    request.open('GET', image)
    request.responseType = 'blob'
    request.onload = function () {
      console.log('Image fetched')
      const blob = request.response
      if (blob.size > 0) {
        resolve(blob)
      } else {
        console.log('Throw')
        // throw new Error('Requested image not found')
        reject(new Error('An error occured'))
      }
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

async function processImage (imageSrc) {
  try {
    const imageBlob = await getImage(imageSrc)
    const image = await loadImage(imageBlob)

    drawImage(image)
  } catch (error) {
    console.error('TryCatch')
    console.error(error.message)
  }
}

processImage('eventflow1.png')
  .then(
    function (tokens) {},
    function (error) {
      console.log(error.message)
    }
  )
