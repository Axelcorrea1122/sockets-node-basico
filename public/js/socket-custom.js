var socket = io();
//escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor')
});
//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})

//enviar info
socket.emit('enviarMensaje', {
    usuario: 'Axel Correa',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del servidor: ', resp);
});

//escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})