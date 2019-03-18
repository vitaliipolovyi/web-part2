if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw/sw.js')
      .then(function (registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope)
      }, function (error) {
        console.error('ServiceWorker registration failed: ', error)
      })
   })
}
