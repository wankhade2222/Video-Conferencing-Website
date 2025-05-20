import React,{useState , useRef , useEffect} from "react";

const server_url  = "http//localhost:8000";

var connections = {};

const peerconfigConnections = {
    "iceServer": [{
        "urls": "stun:stun.l.google.com:19302"
    }]
}

function VideoMeetComponent() {

    let [videoAvailable , setvideoAvailable] = useState(true);

    let[audioAvailable , setaudioAvailable] = useState(true);

    let[video , setVideo] = useState([]);

    let [audio , setAudio] = useState([]);

    let [screen, setScreen] = useState();

    let [showModal, setModal] = useState(true);

    let [screenAvailable, setScreenAvailable] = useState();

    let [messages, setMessages] = useState([])

    let [message, setMessage] = useState("");

    let [newMessages, setNewMessages] = useState(3);

    let [askForUsername, setAskForUsername] = useState(true);

    let [username, setUsername] = useState("");

    const videoRef = useRef([])

    let [videos, setVideos] = useState([])
    return ( <div>bckabk</div> );
}

export default VideoMeetComponent;