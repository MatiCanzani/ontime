import React from "react";
import "../styles/main.scss";
import Helmet from "react-helmet";
import Header from "./Header/Header";
import Cursor from "../../utils/cursor/index";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>On Time Creative</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../images/favicon/favicon-32x32.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <div className="background">
        <div className="background1"></div>
        <div className="background2"></div>
        <div className="background3"></div>
      </div>
      <div className="container-fluid">
        <Header />
        <Cursor />
        {children}
      </div>
    </>
  );
};

export default Layout;
