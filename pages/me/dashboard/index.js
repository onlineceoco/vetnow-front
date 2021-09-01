import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/DashboardLayout/Layout";
import { useRouter } from "next/router";
import WithAuth from "../../../components/HOC/withAuth";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import classes from "./index.module.css";
function Dashboard() {
  const authState = useSelector(state => state.auth);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!authState.isAuthenticated) {
      router.push("/");
    }
  }, []);
  return (
    <div className={classes.dashboardContainer}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Layout>
        <div className={classes.card}>
          <div></div>
          <div></div>
        </div>
      </Layout>
    </div>
  );
}

export default WithAuth(Dashboard);
