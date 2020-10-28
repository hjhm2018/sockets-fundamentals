var socket = io();

        // Los on son para escuchar la información

        socket.on('connect', function(){
            console.log('Conectado al servidor')
        });

        socket.on('disconnect', function(){
            console.log('Perdimos conexion con el servidor')
        });

        // Los emits son para enviar información 
        socket.emit('enviarMensaje', {
            usuario: 'Henry',
            mensaje: 'Hola Mundo'
        }, function(resp){
            console.log('Respuesta server: ', resp);
        });

        // Escuchar al servidor
        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor: ', mensaje)
        });