
import { useEffect, useState, useRef } from "react";
import io from 'socket.io-client';

// const socket = io('https://localhost:3333',{transports: ["websocket"]});
const SOCKET_SERVER_URL = 'https://localhost:3333';

export default function socketTest(){
    //let socket
   
    const socketRef = useRef();

    useEffect(() => {
      socketRef.current = io(SOCKET_SERVER_URL, {
        transports: ["websocket"],
      });

      socketRef.current.on('echo', function(msg){
        console.log("echo msg from server socket:"+msg);
        //socketRef.current.emit("echo",msg);
      });
  

        return () => {
          // App 컴포넌트 unmount시 실행
          console.log('unmounted');
          socketRef.current.disconnect();
        };
      }, []);


      const socketTest = () => {

        socketRef.current.emit("echo", 'ehco test msg by joonik');
        console.log('hello');
      }


    return(
    <>
    <h2 onClick={socketTest}>Click Me, echo event emit!</h2>
    </>
    );

}