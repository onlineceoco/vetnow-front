import { useEffect, useState } from "react";
import classes from "./joinChat.module.css";
import Layout from "../../../components/DashboardLayout/Layout";
import setAuthToken from "../../../helpers/axiosInstance";

import { useRouter } from "next/router";
import nookies from "nookies";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";

function CreateChatroom({ user }) {
  const [chatroomName, setChatroomName] = useState("");
  const [room, setRoom] = useState();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const getRooms = async () => {
    try {
      if (token) {
        const axiosWithTokenHeader = setAuthToken(token);
        const res = await axiosWithTokenHeader.get(`chat`);
        setRoom(res.data.data);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getRooms();
  }, []);

  const handelCreateChatroomSubmit = async e => {
    e.preventDefault();
    try {
      const axiosWithTokenHeader = setAuthToken(token);
      axiosWithTokenHeader.post("chat", {
        name: chatroomName,
        user: user._id,
      });
      getRooms();
    } catch (e) {}
  };

  const handelJoinRoom = (id, name) => {
    router.push(`/chatroom/${id}?name=${name}`);
  };

  let roomForCurrentDoc = [];
  if (room) {
    roomForCurrentDoc = room.filter(rm => rm.user === user._id);
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar user={user} toggle={toggle} />
      <Layout user={user}>
        <div className={classes.container}>
          <div className={classes.card}>
            {roomForCurrentDoc.length > 0 ? (
              <div>
                <p className={classes.roomName}>{roomForCurrentDoc[0].name}</p>
                <button
                  className={classes.join}
                  onClick={() =>
                    handelJoinRoom(
                      roomForCurrentDoc[0]._id,
                      roomForCurrentDoc[0].name,
                    )
                  }
                >
                  ورود به چت روم
                </button>
              </div>
            ) : (
              <form onSubmit={handelCreateChatroomSubmit}>
                <p className={classes.roomName}>ایجاد چت روم</p>
                <div className={classes.createRoom}>
                  <input
                    type="text"
                    name="name"
                    placeholder="نام چت روم را وارد کنید"
                    onChange={e => setChatroomName(e.target.value)}
                  />
                  <button type="submit" className={classes.join}>
                    ایجاد
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Layout>
    </>
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

export default CreateChatroom;
