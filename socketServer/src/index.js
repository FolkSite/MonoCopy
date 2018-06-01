const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 9002;


const activeUsers = {}

io.on('connection', (socket) => {
    console.log('player connected');
    activeUsers[socket] = socket.handshake.query.username;

    socket.emit('sendUsername', {username: socket.handshake.query.username})


    socket.once('disconnected', () => {
        socket.disconnect();
        console.log('user disconnected')
    })

})


server.listen(port, () => {
    console.log('Listening on port', port)
})