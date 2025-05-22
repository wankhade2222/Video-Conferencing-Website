import React, { useState, useRef, useEffect } from "react";
import { Badge, IconButton, TextField } from "@mui/material";
import { Button } from "@mui/material";

const server_url = "http//localhost:8000";

var connections = {};

const peerconfigConnections = {
  iceServer: [
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};

function VideoMeetComponent() {
  let localVideoref = useRef();

  let [videoAvailable, setvideoAvailable] = useState(true);

  let [audioAvailable, setaudioAvailable] = useState(true);

  let [video, setVideo] = useState([]);

  let [audio, setAudio] = useState([]);

  let [screen, setScreen] = useState();

  let [showModal, setModal] = useState(true);

  let [screenAvailable, setScreenAvailable] = useState();

  let [messages, setMessages] = useState([]);

  let [message, setMessage] = useState("");

  let [newMessages, setNewMessages] = useState(3);

  let [askForUsername, setAskForUsername] = useState(true);

  let [username, setUsername] = useState("");

  const videoRef = useRef([]);

  let [videos, setVideos] = useState([]);

   useEffect(() => {
        console.log("HELLO")
        getPermissions();

    })

    // let getDislayMedia = () => {
    //     if (screen) {
    //         if (navigator.mediaDevices.getDisplayMedia) {
    //             navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
    //                 .then(getDislayMediaSuccess)
    //                 .then((stream) => { })
    //                 .catch((e) => console.log(e))
    //         }
    //     }
    // }

 
  const getPermissions = async ()=>{
    try{
        const videoPermission = await navigator.mediaDevices.getUserMedia({video:true});

        if(videoPermission){
            setvideoAvailable(true);
            console.log("Video Permission Granted");
        }
        else{
                      setvideoAvailable(false);
                console.log('Video permission denied');

        }
        const audioPermission = await navigator.mediaDevices.getUserMedia({audio:true});

        if(audioPermission){
            setaudioAvailable(true);
            console.log("Video Permission Granted");
        }
        else{
                      setaudioAvailable(false);
                console.log('Video permission denied');

        }
        if(navigator.mediaDevices.getDisplayMedia){
            setScreenAvailable(true);
        }
        else{
            setScreenAvailable(false);
        }
        if(videoAvailable || audioAvailable){
            const userMediaStream = await navigator.mediaDevices.getUserMedia({video:videoAvailable,audio:audioAvailable});
            if(userMediaStream){
                window.localStream = userMediaStream;
                if (localVideoref.current) {
                        localVideoref.current.srcObject = userMediaStream;
                    }
            }
        }
     }
    catch(error){
       console.log(error);
    }
  }
  useEffect(() => {
    getPermissions();
  },[]);
  return (
    <div>
      {askForUsername === true ? (
        <div>
            <h2>Enter into Lobby</h2>
            <TextField
              id="outlined-basic"
              label="username  "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
            />
            <Button variant="contained" >Connect</Button>
            <div>
              <video ref={localVideoref} autoPlay muted></video>
            </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default VideoMeetComponent;
