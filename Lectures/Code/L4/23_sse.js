if (window.EventSource) {
  const source = new EventSource('http://localhost:3030')

  source.addEventListener('open', function (e) {
    document.getElementById('state').innerHTML = 'Connected'
  }, false)

  source.addEventListener('error', function (e) {
    const stateId = document.getElementById('state')
    if (e.eventPhase === EventSource.CLOSED) {
      console.log('closed')
      source.close()
    }
    if (e.target.readyState === EventSource.CLOSED) {
      stateId.innerHTML = 'Disconnected'
    } else if (e.target.readyState === EventSource.CONNECTING) {
      stateId.innerHTML = 'Connecting...'
    }
  }, false)

  source.addEventListener('message', function (e) {
    document.getElementById('main').innerHTML = e.data
  }, false)
} else {
  console.error('Your browser doesn\'t support SSE')
}
