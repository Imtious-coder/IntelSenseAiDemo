import "react-phone-number-input/style.css";

import "../styles/globals.css";
import "../styles/ContactForm.scss";
import "../styles/mobile.scss";
import "../styles/hompage-style.css";
import "../styles/map.scss";
import "../styles/postcard.scss";
import "../styles/singlepost.scss";
import "../styles/products.scss";
import "../styles/casestudies.scss";
import "../styles/loader.scss";
import "../styles/Career.scss";
import "../styles/OurTeam.scss";
import "../styles/About.scss";
import "../styles/blogstyles.scss";
import "../styles/singlepost.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/Navbar/Navbar";

import Router from "next/router";
import Head from "next/head";
import axios from "axios";
import NProgress from "nprogress";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import theme from "../styles/theme";
import { HeaderMeta } from "../components/Header";
import BottomPart from "../components/Home/motivation/bottomPart";

export const BASE_URL = false
  ? "http://localhost:8000"
  : "https://server.intelsense.ai";

NProgress.configure({ minimum: 0.2, showSpinner: false });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
// setAuthHeader();

function MyApp({ Component, ...pageProps }) {
  const skipRoutes = ["/trydemo"];

  const { asPath } = pageProps.router;

  if (skipRoutes.indexOf(asPath) !== -1) {
    if (typeof window !== "undefined") {
      document.querySelector("html").style.fontSize = "100%";
    }

    return (
      <ThemeProvider theme={theme}>
        <HeaderMeta />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }

  return (
    <>
      <HeaderMeta />
      <Navbar />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      <BottomPart />
    </>
  );
}

export default MyApp;
