import express from "express";
import   {createServer} from  "node:http";

import { Server } from "socket.io";


import mongoose from "mongoose";
mongoose.set('strictQuery', true); // or false depending on your preference


import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import { connect } from "node:http2";
import { connectToSocket } from "./controllers/socketManger.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);



app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users" , userRoutes);

const start = async () =>{
    const connectmongooseDB = await mongoose.connect("mongodb+srv://aryaw25:nMMm5y1sMyYT7N1l@zoom-cluster.z1wuqod.mongodb.net/?retryWrites=true&w=majority&appName=Zoom-Cluster")
    server.listen(app.set("port"),()=>{
        console.log("server started");
    })
}
start();