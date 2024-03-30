const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('sendMessage', (data) => {
 
      const { senderId, channelId, text } = data;
      
      // Emit the message to all sockets in the channelId room
      io.to(channelId).emit('message', { senderId, text });
  });

  socket.on('disconnect', () => {
      console.log('User disconnected');
  });
});