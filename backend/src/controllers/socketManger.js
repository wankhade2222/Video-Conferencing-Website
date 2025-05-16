import { Server, Socket } from "socket.io";

let connections = {};
let messages = {};
let timeOnline = {};
export const connectToSocket = (server) => {
  const io = new Server(server);

  io.on("conection", (Socket) => {
    Socket.on("join-call", (path) => {

      if(connections[path] === undefined){
        connections[path] = []
      }
      connections[path].push(socket.id)
    });

    socket.on("signal", (toId, messages) => {
      io.to(toId).emit("signal", socket.id, message);
    });
    
    socket.io("chat-messages" , (data,sender)=>{

    })

    socket.on("disconnect",()=>{

    })
  });

  return io;
};
