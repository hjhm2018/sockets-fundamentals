const express = require('express');

// Se importa el socket
const socketIO = require('socket.io');

// Se importa el http para montar el servidor
const http = require('http');


const path = require('path');

const app = express();

// Se crea otro servidor
let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO input/output esta es la comunicacion del Backend
// Se exporta para poder usarlo en otro archivo
module.exports.io = socketIO(server);

// Se importa el archivo de los sockets
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});