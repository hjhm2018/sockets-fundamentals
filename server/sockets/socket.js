const {io} = require('../server');

io.on('connection', (client)=>{
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    })

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback)=>{
        console.log(data);


        client.broadcast.emit('enviarMensaje', data);

        // if(mensaje.usuario){
        //     callback({
        //         respuesta: 'Todo salió bien'
        //     });
        // }else{
        //     callback({
        //         respuesta: 'No salió bien'
        //     });
        // }
    });
});