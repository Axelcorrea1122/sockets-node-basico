const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });



    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })


    //escuchar informacion
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //con broadcast se envia y se responde a todos los usuarios si no solo se recibe la respues del cliente que mando
        /* if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAAAL'
            });
        }
        callback(); */
    })
})