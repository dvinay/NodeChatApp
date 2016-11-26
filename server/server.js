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
    "from" : "Admin",
    "text" : "Welcome to the Chat App",
    "createdAt" : new Date().getTime()
  });

  socket.broadcast.emit('newMessage', {
    from : "Admin",
    text : "new user has joined",
    createdAt : new Date().getTime()
  })
  socket.on('createMessage', (message) => {
    console.log('createMessage',message);

    // io.emit('newMessage', { //fire the event to every connection because it's io emit
    //   "from" : message.from,
    //   "text" : message.text,
    //   "createdAt" : new Date().getTime()
    // });
    // socket.broadcast.emit('newMessage', {
    //   from : message.from,
    //   text : message.text,
    //   createdAt : new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('client was disconnected');
  });
});

server.listen(port, function() {
  console.log(`app is running on ${port} port`);
});
