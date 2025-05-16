import { Server, Socket } from "socket.io";

  let connections = {}
  let messages = {}
  let timeOnline = {}
 export const connectToSocket = (server)=>{
   const io = new Server(server);

   io.on("conection" , (Socket)=>{

    Socket.on("join-call",(path)=>{

    })
    socket.on("signal",(toId ,messages)=>{
      io.to(toId).emit("signal",socket.id,message);

    })

   })



   return io;
}