import { io } from "socket.io-client";

const socket = io("http://localhost:5001", {
  forceNew: true,
  reconnectionAttempts: Infinity,
  timeout: 10000,
  transports: ["websocket"],
});

export default socket;
