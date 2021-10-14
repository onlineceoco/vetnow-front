import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import InfoBar from "../../components/InfoBar/InfoBar";
import Input from "../../components/Input/Input";
import Messages from "../../components/Messages/Messages";
import setAuthToken from "../../helpers/axiosInstance";
import classes from "./chatroom.module.css";
import nookies from "nookies";

let socket;
function Chatroom({ user, token }) {
  const router = useRouter();
  const roomId = router.query.id;
  const roomName = router.query.name;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handelSendMessage = e => {
    e.preventDefault();
    socket.emit("chatroomMessage", { message, roomId }, () => setMessage(""));
  };

  useEffect(() => {
    socket = io(process.env.baseUrl, {
      auth: { token },
      transports: ["websocket", "polling", "flashsocket"],
    });

    if (roomId) {
      socket.emit("joinroom", roomId);
      socket.on("newMessage", ({ message }) => {
        setMessages(currval => [...currval, message]);
      });
    }

    socket.on("send_exist_messages_from_db", messagesFromDb => {
      setMessages(messagesFromDb.message);
    });

    return () => {
      socket.emit("leaveroom", roomId);
    };
  }, [roomId]);

  useEffect(() => {
    if (messages.length > 0) {
      socket.emit("save_to_db", messages);
    }
  }, [messages]);

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <InfoBar room={roomName} />
        <Messages messages={messages} currentUser={user} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={handelSendMessage}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { jwt } = nookies.get(ctx);

  const axios = setAuthToken(jwt);
  try {
    const res = await axios.get("users");
    const user = res.data.user;
    return { props: { user, token: jwt } };
  } catch (e) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}

export default Chatroom;
