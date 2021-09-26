import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { Manager } from "socket.io-client";
import InfoBar from "../../../../components/InfoBar/InfoBar";
import Input from "../../../../components/Input/Input";
import setAuthToken from "../../../../helpers/axiosInstance";
import classes from "./room.module.css";
import ScrollToBottom from "react-scroll-to-bottom";
import nookies from "nookies";

let socket;
function SupportChatroom({ user }) {
  const router = useRouter();
  const room = router.query.room;
  const [message, setMessage] = useState({
    message: "",
    from: "support",
  });
  let token;
  const [messages, setMessages] = useState([]);
  console.log(messages);

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  useEffect(() => {
    const manager = new Manager(process.env.baseUrl, {
      withCredentials: true,
    });

    socket = manager.socket("/support", {
      auth: { token },
    });
    socket.emit("client_join", room);
    socket.on("new_msg", ({ msg, room }) => {
      setMessages(curval => [...curval, msg]);
    });
    socket.emit("loaded", room);
    socket.on("client_first_msg_server", msg => {
      console.log(msg);
      setMessages([JSON.parse(msg)]);
    });
    return () => {
      socket.emit("leaveRoom");
    };
  }, []);

  const handelSendMessage = e => {
    e.preventDefault();
    socket.emit("support_msg", message, room, () =>
      setMessage({
        message: "",
        from: "support",
      }),
    );
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <InfoBar />
        <ScrollToBottom className={classes.chat}>
          {messages &&
            messages.map((message, index) => {
              if (message && message.from === "client") {
                return (
                  <Fragment key={index}>
                    <div className={classes.clientChat}>
                      <span>{message && message.message}</span>
                    </div>
                  </Fragment>
                );
              } else {
                return (
                  <Fragment key={index}>
                    <div className={classes.supportChat}>
                      <span>{message && message.message}</span>
                    </div>
                  </Fragment>
                );
              }
            })}
        </ScrollToBottom>

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

export default SupportChatroom;
