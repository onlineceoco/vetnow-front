import { useEffect, useState } from "react";
import classes from "./support.module.css";
import DashboardLayout from "../../../../components/DashboardLayout/Layout";
import setAuthToken from "../../../../helpers/axiosInstance";
import nookies from "nookies";
import Layout from "../../../../components/Layout/Layout";
import { Manager } from "socket.io-client";
import Link from "next/link";

let socket;
function Support({ userState }) {
  const [currentSupports, setCurrentSupports] = useState([]);
  const [isNewMsg, setIsNewMsg] = useState(false);
  const [clientRoom, setClientRoom] = useState(null);
  let token;
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

    socket.on("new_msg_notif", ({ sent, room }) => {
      console.log(room);
      setIsNewMsg(sent);
      setClientRoom(room);
    });

    //get connected supports
    socket.on("current_supports", currentSupports => {
      setCurrentSupports(currentSupports);
    });

    socket.on("support_disconnect", remainSupports => {
      setCurrentSupports(remainSupports);
    });
    return () => {};
  }, []);

  const joinClientRoomHandler = () => {
    socket.emit("support_join_clientroom", clientRoom);
  };

  return (
    <>
      <Layout user={userState} isDashboard>
        <DashboardLayout user={userState}>
          <div className={classes.container}>
            oprators:
            {currentSupports.map((user, index) => {
              return <p key={user._id}>{user.name ? user.name : user.phone}</p>;
            })}
            {isNewMsg && clientRoom ? (
              <div onClick={joinClientRoomHandler}>
                <Link href={`/me/dashboard/support/${clientRoom}`}>
                  New Message
                </Link>
              </div>
            ) : null}
          </div>
        </DashboardLayout>
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
    return { props: { userState: user } };
  } catch (e) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}

export default Support;
