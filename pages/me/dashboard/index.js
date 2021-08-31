import { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/DashboardLayout/Layout";
import { useRouter } from "next/router";
import WithAuth from "../../../components/HOC/withAuth";

function Dashboard() {
  const authState = useSelector(state => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!authState.isAuthenticated) {
      router.push("/");
    }
  }, []);
  return <Layout>dashboard</Layout>;
}

export default WithAuth(Dashboard);
