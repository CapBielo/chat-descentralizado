// Crear una instancia de PeerJS
const peer = new Peer();

// Manejar el evento de conexión
peer.on('open', function(peerId) {
  console.log('Connected with PeerJS. Peer ID:', peerId);
});

// Manejar el evento de recepción de datos
peer.on('connection', function(connection) {
  connection.on('data', function(data) {
    console.log('Received data:', data);
  });
});
