async function connectToServer() {
  const ws = new WebSocket('ws://localhost:7071/ws');
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      if (ws.readyState === 1) {
        clearInterval(timer);
        resolve(ws);
      }
    }, 10);
  });
}

(async function () {
  const ws = await connectToServer();
  ws.onmessage = (webSocketMessage) => {
    const messageBody = JSON.parse(webSocketMessage.data);
    console.log(messageBody);
  };

  document.body.addEventListener('mousemove', (evt) => {
    const messageBody = { x: evt.clientX, y: evt.clientY };
    ws.send(JSON.stringify(messageBody));
  });
})();
