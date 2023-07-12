// Función para manejar la recepción de mensajes en la red de malla
function receiveMessage(message) {
    // Aquí puedes implementar la lógica para manejar la recepción de mensajes en la red de malla
    // Por simplicidad, en este ejemplo simplemente mostraremos el mensaje recibido en la consola
    console.log('Mensaje recibido:', message);
  }
  
  // Función para enviar un mensaje a través de la red de malla
  function sendMessage(message) {
    // Aquí puedes implementar la lógica para enviar el mensaje a través de la red de malla
    // Por simplicidad, en este ejemplo simplemente llamaremos a la función receiveMessage()
    receiveMessage(message);
  }

  // Utilizamos la biblioteca PeerJS para la comunicación en red
const peer = new Peer();

// Representación de un nodo en la red de malla
class Node {
  constructor(id) {
    this.id = id;
    this.peers = new Set();
  }

  addPeer(peerId) {
    this.peers.add(peerId);
  }

  removePeer(peerId) {
    this.peers.delete(peerId);
  }

  sendMessage(message) {
    console.log(`Node ${this.id} sending message: ${message}`);
    for (const peerId of this.peers) {
      peer.send(peerId, message);
    }
  }

  receiveMessage(senderId, message) {
    console.log(`Node ${this.id} received message from Node ${senderId}: ${message}`);
    // Aquí puedes agregar la lógica para mostrar el mensaje en la interfaz de usuario
  }
}

// Creación de nodos de la red de malla
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// Establecimiento de conexiones entre los nodos
node1.addPeer(node2.id);
node1.addPeer(node3.id);
node2.addPeer(node1.id);
node2.addPeer(node3.id);
node3.addPeer(node1.id);
node3.addPeer(node2.id);
node3.addPeer(node4.id);
node4.addPeer(node3.id);

// Función para enviar un mensaje
function sendMessage(message) {
  node1.sendMessage(message);
}

// Ejemplo de envío de mensaje
sendMessage("Hola, mundo!");

// Configuración de PeerJS para recibir mensajes
peer.on('connection', function (conn) {
  conn.on('data', function (data) {
    const senderId = conn.peer;
    node1.receiveMessage(senderId, data);
  });
});

  // Función para configurar y conectar dispositivos en la red de malla
function configurarRedDeMalla(esCoordinador) {
  if (esCoordinador) {
    // Pasos específicos para el coordinador
    console.log("Configurando como coordinador...");

    // Iniciar la aplicación y esperar conexiones de otros nodos
    iniciarAplicacion();

    // Generar identificador único o permitir configuración personalizada
    const identificador = generarIdentificador();

    // Difundir información de conexión a través de canales de comunicación
    difundirInformacionConexion(identificador);
  } else {
    // Pasos específicos para los participantes
    console.log("Configurando como participante...");

    // Obtener información de conexión del coordinador (por ejemplo, dirección IP, puerto)
    const informacionConexion = obtenerInformacionConexion();

    // Ingresar la información de conexión en la aplicación para establecer la conexión
    establecerConexion(informacionConexion);
  }

  // Una vez que los dispositivos están conectados en la red de malla,
  // la comunicación entre los nodos puede comenzar
  console.log("Conexión establecida en la red de malla. ¡Comienza a chatear!");
}

// Funciones auxiliares de ejemplo
function iniciarAplicacion() {
  console.log("Iniciando la aplicación...");
  // Lógica para iniciar la aplicación y esperar conexiones
}

function generarIdentificador() {
  const identificador = Math.floor(Math.random() * 1000);
  console.log("Identificador generado: ", identificador);
  return identificador;
}

function difundirInformacionConexion(identificador) {
  console.log("Difundiendo información de conexión para el identificador: ", identificador);
  // Lógica para difundir información de conexión a través de canales de comunicación
}

function obtenerInformacionConexion() {
  const informacionConexion = prompt("Ingresa la información de conexión proporcionada por el coordinador:");
  console.log("Información de conexión obtenida: ", informacionConexion);
  return informacionConexion;
}

function establecerConexion(informacionConexion) {
  console.log("Estableciendo conexión con el coordinador usando la información: ", informacionConexion);
  // Lógica para establecer la conexión con el coordinador
}

// Ejemplo de uso:

// El usuario selecciona si desea ser el coordinador o no
const esCoordinador = confirm("¿Desea ser el coordinador?");

// Llamada a la función de configuración y conexión en red de malla
configurarRedDeMalla(esCoordinador);
