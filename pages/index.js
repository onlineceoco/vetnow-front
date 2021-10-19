import { useState } from "react";
import nookies from "nookies";
import HeroSection from "../components/HeroSection/HeroSection";
import dynamic from "next/dynamic";
import {
  homeObjectFour,
  homeObjectOne,
  homeObjectThree,
  homeObjectTwo,
  homeObjectFive,
} from "../components/InfoSection/Data";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import setAuthToken from "../helpers/axiosInstance";

const InfoSection = dynamic(() =>
  import("../components/InfoSection/InfoSection"),
);
const Services = dynamic(() => import("../components/Services/Services"));
const Services2 = dynamic(() => import("../components/Services2/Service2"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

function Home({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <title>VetNOW</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

      {/* <Drawer />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <HeroSection />
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <Services />
      <InfoSection {...homeObjectThree} />
      <Services2 />
      <InfoSection {...homeObjectFour} />
      <InfoSection {...homeObjectFive} />
      <Footer /> */}
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
    return { props: {} };
  }
}

export default Home;
