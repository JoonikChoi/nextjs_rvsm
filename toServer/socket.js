import { createContext } from "react";
import socketIo from "socket.io-client";
import {socketPoint} from "./API-AccessPoint";

const ENDPOINT = socketPoint;
export const socket = socketIo(ENDPOINT,{transports: ["websocket"]});
//export const socket = socketIo(`https://localhost:3333`, { withCredentials: true });
export const SocketContext = createContext(socket);

/*
export const makeMessage = pongData => {
    const { prevNickname, nickname, content, type, time } = pongData;
  
    let nicknameLabel;
    let contentLabel = "";
  
    switch (type) {
      case SOCKET_EVENT.JOIN_ROOM: {
        contentLabel = `${nickname} has joined the room.`;
        break;
      }
      case SOCKET_EVENT.UPDATE_NICKNAME: {
        contentLabel = `User's name has been changed.\n ${prevNickname} => ${nickname}.`;
        break;
      }
      case SOCKET_EVENT.SEND_MESSAGE: {
        contentLabel = String(content);
        nicknameLabel = nickname;
        break;
      }
      default:
    }
  
    return {
      nickname: nicknameLabel,
      content: contentLabel,
      //time: dayjs(time).format("HH:mm"),
    };
};

export const SOCKET_EVENT = {
    JOIN_ROOM: "JOIN_ROOM",
    UPDATE_NICKNAME: "UPDATE_NICKNAME",
    SEND_MESSAGE: "SEND_MESSAGE",
    RECEIVE_MESSAGE: "RECEIVE_MESSAGE",
};

socket.on("connect", () => {
  console.log("socket server connected.");
});

socket.on("disconnect", () => {
  console.log("socket server disconnected.");
});
*/