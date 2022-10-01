const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const socketIo = require("socket.io");
const Port= 4500|| process.env.Port;

app.use(cors());
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
server.listen(Port, () => {
    console.log(`listening on *:${Port}`);
  });