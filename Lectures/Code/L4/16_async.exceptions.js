console.log('Await');

function getImage(image) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.open('GET', image);
    request.responseType = 'blob';
    request.onload = function () {
      console.log('Image fetched');
      const blob = request.response;
      if (blob.size > 0) {
        resolve(blob);
      } else {
        reject(new Error('Requested image not found'));
      }
    };
    request.onerror = function () {
      console.error('test');
      reject(new Error('An error occured'));
    };

    request.send();
  });
}

function loadImage(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload = function () {
      console.log('Image loaded');
      resolve(this);
    };
    const url = URL.createObjectURL(data);
    console.log(url);
    image.src = url;
  });
}

function drawImage(image) {
  document.body.appendChild(image);
}

async function processImage(imageSrc) {
  const imageBlob = await getImage(imageSrc);
  const image = await loadImage(imageBlob);
  drawImage(image);
}

// console.log(processImage('eventflow1.png'));
processImage('eventflow1.png').catch((error) => {
  console.error('Catch');
  console.error(error.message);
});
