var socket = io();

socket.on('connect', function() {
  console.log('connected to server');
  // socket.emit('createMessage', {
  //   "from" : "vinay",
  //   "text" : "Hi, how are you",
  // });
});
socket.on('disconnect', function() {
  console.log('disconnected to server');
});
socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
