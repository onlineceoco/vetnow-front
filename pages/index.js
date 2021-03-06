import { Fragment, useEffect } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "./../components/InfoSection/InfoSection";
import {
  homeObjectFour,
  homeObjectOne,
  homeObjectThree,
  homeObjectTwo,
  homeObjectFive,
} from "../components/InfoSection/Data";
import Services from "../components/Services/Services";
import Services2 from "../components/Services2/Service2";
import Footer from "../components/Footer/Footer";
import nookies from "nookies";
import setAuthToken from "../helpers/axiosInstance";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";

function Home({ user }) {
  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <Fragment>
      <Layout user={user}>
        <HeroSection />
        <InfoSection {...homeObjectOne} />
        <InfoSection {...homeObjectTwo} />
        <Services />
        <InfoSection {...homeObjectThree} />
        <Services2 />
        <InfoSection {...homeObjectFour} />
        <InfoSection {...homeObjectFive} />
        <Footer />
      </Layout>
    </Fragment>
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
    return { props: {} };
  }
}

export default Home;
