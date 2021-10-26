import React from "react";
import "../styles/main.scss";


const Layout = ({ children }) => {
  return <>
<div className="background">
            <div className="background1"></div>
            <div className="background2"></div>
            <div className="background3"></div>
</div>
  {children}
  </>;
};

export default Layout;
