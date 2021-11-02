import React from "react";
import "../styles/main.scss";
import Helmet from "react-helmet";
import "normalize.css";

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
      {children}
    </>
  );
};

export default Layout;
