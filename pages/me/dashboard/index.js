import { useState } from "react";
import Layout from "../../../components/DashboardLayout/Layout";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import classes from "./index.module.css";
import nookies from "nookies";
import setAuthToken from "../../../helpers/axiosInstance";
function Dashboard({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.dashboardContainer}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar user={user} toggle={toggle} />
      <Layout user={user}>
        <div className={classes.card}>
          <div></div>
          <div></div>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { jwt } = nookies.get(ctx);
  const axios = setAuthToken(jwt);
  try {
    const res = await axios.get("users");
    const user = res.data.user;
    if (user) {
      return { props: { user } };
    }
    return { props: {} };
  } catch (e) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default Dashboard;
