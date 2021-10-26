import React from "react";
import "../styles/main.scss";
import Helmet from "react-helmet"


const Layout = ({ children }) => {
  return <>
  <Helmet>
      <title>On Time Creative</title>
    <link rel="apple-touch-icon" sizes="144x144" href="../images/favicon_package_v0.16/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon_package_v0.16/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon_package_v0.16/favicon-16x16.png" />
    <link rel="manifest" href="../images/favicon_package_v0.16/site.webmanifest"/>
    <link rel="mask-icon" href="../images/favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5"/>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#ffffff"/>
  </Helmet>
<div className="background">
            <div className="background1"></div>
            <div className="background2"></div>
            <div className="background3"></div>
</div>
  {children}
  </>;
};

export default Layout;
