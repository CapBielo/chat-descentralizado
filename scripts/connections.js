// Establecer una conexión con otro par
const connection = peer.connect('otroPeerId');

// Manejar el evento de conexión establecida
connection.on('open', function() {
  console.log('Connection established with otroPeerId');
});

// Enviar datos a través de la conexión establecida
connection.send('Hola, mundo!');
