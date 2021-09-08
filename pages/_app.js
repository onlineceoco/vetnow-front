import "../styles/globals.css";
import "../styles/login.css";
import "../styles/Sidebar.css";
import "../styles/Messages.css";
import "../styles/Tabs.scss";
import "../styles/Tabs_chick.scss";
import { wrapper } from "../redux/store";
import { isUserLoggedIn } from "../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, []);

  return (
    <>
      <Head>
        <title>Vetnow</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
