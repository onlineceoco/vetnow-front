import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import InfoBar from "../../components/InfoBar/InfoBar";
import Input from "../../components/Input/Input";
import Messages from "../../components/Messages/Messages";
import setAuthToken from "../../helpers/axiosInstance";
import classes from "./chatroom.module.css";
import nookies from "nookies";

function Chatroom({ user }) {
  const router = useRouter();
  const roomId = router.query.id;
  const roomName = router.query.name;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [socket, setSocket] = useState(null);

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const handelSendMessage = e => {
    e.preventDefault();
    socket.emit("chatroomMessage", { message, roomId }, () => setMessage(""));
  };
  useEffect(() => {
    const socket = io(process.env.baseUrl, {
      auth: { token },
      transports: ["websocket", "polling", "flashsocket"],
    });
    setSocket(socket);
    if (roomId) {
      socket.emit("joinroom", roomId);
      socket.on("newMessage", ({ message, name }) => {
        setName(name);
        setMessages(currval => [...currval, message]);
      });
      return () => {
        socket.emit("leaveroom", roomId);
      };
    }
  }, [roomId]);

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <InfoBar room={roomName} />
        <Messages messages={messages} name={name} currentUser={user} />
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
    return { props: { user } };
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
