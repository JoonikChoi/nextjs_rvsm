
import { useEffect, useState, useRef } from "react";
import io from 'socket.io-client';

// const socket = io('https://localhost:3333',{transports: ["websocket"]});
const SOCKET_SERVER_URL = 'http://localhost:3333';

export default function socketTest(){
    //let socket
   
    const socketRef = useRef();
    const [id, setId] = useState("");

    const nameChange = (e) => {
      setId(e.target.value);
    }


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
        console.log('id?', id);
        socketRef.current.emit("data", {HospitalCode : "YUMC", id : id});
      }


    return(
    <>
      <input type="text" value={id} onChange={nameChange} placeholder="환자id입력"></input>
      <button onClick={socketTest}>Fake 디바이스 값 보내기</button>
    </>
    );

}