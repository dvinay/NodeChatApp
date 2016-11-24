const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage' , { //new event is firing
    "from" : "Jhon",
    "text" : "See you",
    "createdAt" : new Date()
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage',message);
  });

  socket.on('disconnect', () => {
    console.log('client was disconnected');
  });
});

server.listen(port, function() {
  console.log(`app is running on ${port} port`);
});
