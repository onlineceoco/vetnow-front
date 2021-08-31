import { useEffect, useState } from "react";
import classes from "./joinChat.module.css";
import { useSelector } from "react-redux";
import Layout from "../../../components/DashboardLayout/Layout";
import setAuthToken from "../../../helpers/axiosInstance";
import io from "socket.io-client";
import { baseUrl } from "../../../helpers/UrlConfig";
import WithAuth from "../../../components/HOC/withAuth";
import { useRouter } from "next/router";
import nookies from "nookies";

function CreateChatroom({ cookies }) {
  const [chatroomName, setChatroomName] = useState("");
  const [room, setRoom] = useState();
  const router = useRouter();
  // const token = cookies.jwt;
  let token;
  const authState = useSelector(state => state.auth);
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  // useEffect(() => {
  //   const socket = io(baseUrl, {
  //     auth: { token },
  //     transports: ["websocket", "polling", "flashsocket"],
  //   });
  // }, []);

  const getRooms = async () => {
    try {
      if (token) {
        const axiosWithTokenHeader = setAuthToken(token);
        const res = await axiosWithTokenHeader.get(`chat`);
        setRoom(res.data.data);
      }
    } catch (e) {
      console.log(e, "room");
    }
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
        user: authState.user._id,
      });
      getRooms();
    } catch (e) {
      console.log(e, "createChatroom");
    }
  };

  const handelJoinRoom = (id, name) => {
    router.push(`/chatroom/${id}?name=${name}`);
  };

  let roomForCurrentDoc = [];
  if (room) {
    roomForCurrentDoc = room.filter(rm => rm.user === authState.user._id);
  }
  console.log(roomForCurrentDoc);
  return (
    <Layout>
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
  );
}

// export async function getServerSideProps(ctx) {
//   // Parse
//   const cookies = nookies.get(ctx);
//   return { props: { cookies } };
// }

export default WithAuth(CreateChatroom);
