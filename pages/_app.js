import "../styles/globals.css";
import "../styles/login.css";
import "../styles/Sidebar.css";
import "../styles/Tabs.scss";

import Router from "next/router";
import { useState } from "react";
import { wrapper } from "../redux/store";

import BetweenPage from "../components/Loading/betweenPage";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", url => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", url => {
    setLoading(false);
  });
  return (
    <>
      {loading && <BetweenPage />}
      {!loading && <Component {...pageProps} />}
    </>
  );
}

export default wrapper.withRedux(MyApp);
