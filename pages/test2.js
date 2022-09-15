import { createContext } from "react";
import { React, useEffect, useState } from "react";
//import { authCheck } from "../../service/authcheck";
import socketIo from "socket.io-client";


const socket = socketIo('https://localhost:3333',{transports: ["websocket"]});
const SocketContext = createContext(socket);


const SocketChat = ( { roomID } ) => {
    //const navigate = useNavigate();

    
    useEffect(() => {
      socket.connect();

      return () => {
        // App 컴포넌트 unmount시 실행
        console.log('unmounted');
        socket.disconnect();
      };
    }, []);


  return (
    <SocketContext.Provider value={socket}>
        <>
        <h2 onClick={socketTest}>Click Me, echo event emit!</h2>
        </>
    </SocketContext.Provider>
  )
}

export default SocketChat