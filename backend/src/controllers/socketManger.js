import { Server, Socket } from "socket.io";

let connections = {};
let messages = {};
let timeOnline = {};
export const connectToSocket = (server) => {
  const io = new Server(server);

  io.on("conection", (Socket) => {

    console.log("SOMETHING CONNECTED");

    Socket.on("join-call", (path) => {

      if(connections[path] === undefined){
        connections[path] = []
      }
      connections[path].push(socket.id)

      timeOnline[socket.id] = new Date();

      for(let a=0; a<connections[path].length; a++){
        io.to(connections[path][a]).emit("user-joined",socket.id,connections[path])
      }

      if(messages[path] != undefined){
        for(let a=0; a<messages[path].length; ++a  ){
          io.to(socket.id).emit("chat-message",messages[path][a]['data'],
            messages[path][a]['sender'],messages[path][a]['socket-id-sender']
          )
        }
      }
    });

    socket.on("signal", (toId, messages) => {
      io.to(toId).emit("signal", socket.id, message);
    });
    
    socket.io("chat-messages" , (data,sender)=>{
          
      const[matchingRoom,found] = Object.entries(connections)
      .reduce(([room,isFound],[roomKey,roomValue])=>{

        if(!isFound && roomValue.includes(socket.id)){
          return [roomKey,true];
        }
        return [room,isFound];
      },['',false]);

      if(found == true){
        if(messages[matchingRoom] === undefined){
          messages[matchingRoom] = []
        }
        messages[matchingRoom].push({'sender':sender,"data":data,"socket-id-sender": socket.id})
        console.log("message",matchingRoom,":",sender,data)

        connections[matchingRoom].foreach((elem)=>{
          io.to(elem).emit("chat-message",data,sender,socket.id)
        })
      }
    })

    socket.on("disconnect",()=>{

    })
  });

  return io;
};
