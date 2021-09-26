import { Fragment, useState } from "react";
import Drawer from "../Drawer/Drawer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Menubar from "../store/menubar/Menubar";
import { Manager } from "socket.io-client";
import classes from "./Layout.module.css";
import ScrollToBottom from "react-scroll-to-bottom";
import { v4 as uuidv4 } from "uuid";

let socket;
const ClientRoom = uuidv4();
function Layout({ user, children, isSecond, isDashboard }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openChatArea, setOpenChatArea] = useState(false);
  const [clientMessage, setClientMessage] = useState({
    message: "",
    from: "client",
  });
  const [messages, setMessages] = useState([]);
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handelSupportChat = () => {
    setOpenChatArea(true);
    const manager = new Manager(process.env.baseUrl, {
      withCredentials: true,
    });

    socket = manager.socket("/support", {
      auth: { token },
    });

    socket.emit("client_join", ClientRoom);

    socket.on("new_msg", ({ msg, room }) => {
      setMessages(curval => [...curval, msg]);
      localStorage.setItem("chat", JSON.stringify(msg));
      const firstMsg = JSON.parse(localStorage.getItem("chat"));
      socket.emit("client_first_msg", firstMsg, room);
    });
  };

  const closeChatArea = () => {
    setOpenChatArea(false);
  };

  const handelSubmitChat = e => {
    e.preventDefault();
    socket.emit("clinet_msg", clientMessage, ClientRoom, () =>
      setClientMessage({
        message: "",
        from: "client",
      }),
    );
  };

  return (
    <Fragment>
      {isSecond ? (
        <>
          <button className={classes.joinChat} onClick={handelSupportChat}>
            Chat
          </button>

          <Menubar />
          <Drawer />
          {children}
        </>
      ) : (
        <>
          <button className={classes.joinChat} onClick={handelSupportChat}>
            Chat
          </button>
          {openChatArea && (
            <div className={classes.chatArea}>
              <div className={classes.chatHeader}>
                <div className={classes.close} onClick={closeChatArea}>
                  X
                </div>
                <div className={classes.infoContainer}>
                  <div className={classes.info}>وبسایت تخصصی وتناو</div>
                  <div className={classes.subInfo}>وبسایت تخصصی وتناو</div>
                </div>
              </div>
              <ScrollToBottom
                className={classes.chat}
                followButtonClassName="scrollBtn"
              >
                {messages.map((message, index) => {
                  if (message.from === "client") {
                    return (
                      <div key={index} className={classes.clientChat}>
                        <span>{message.message}</span>
                      </div>
                    );
                  } else {
                    return (
                      <Fragment key={index}>
                        <div className={classes.supportChat}>
                          <span>{message.message}</span>
                        </div>
                      </Fragment>
                    );
                  }
                })}
              </ScrollToBottom>
              <div className={classes.footer}>
                <form onSubmit={handelSubmitChat}>
                  <input
                    type="text"
                    required
                    className={classes.input}
                    placeholder="پیامی بنویسید..."
                    onChange={e =>
                      setClientMessage({
                        message: e.target.value,
                        from: "client",
                      })
                    }
                    value={clientMessage.message}
                  />
                </form>
              </div>
            </div>
          )}
          {!isDashboard && <Drawer />}{" "}
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar user={user} toggle={toggle} />
          {children}
        </>
      )}
    </Fragment>
  );
}

export default Layout;
