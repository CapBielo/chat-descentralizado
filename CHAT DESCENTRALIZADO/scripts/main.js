// Referencias a los elementos del DOM
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');

// Función para enviar un mensaje
function sendMessage(message) {
  // Aquí puedes implementar la lógica para enviar el mensaje a través de la red de malla
  // Por simplicidad, en este ejemplo simplemente agregaremos el mensaje al contenedor de mensajes

  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerText = message;
  messagesContainer.appendChild(messageElement);
}

// Evento para enviar un mensaje cuando se envíe el formulario
messageForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message !== '') {
    sendMessage(message);
    messageInput.value = '';
  }
});
