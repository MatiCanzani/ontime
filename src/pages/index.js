import * as React from "react";
import Layout from "../components/layout";
import "../styles/main.scss";

import logo from "../images/On Time Creative iso-25.png";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <div className="container">
          <img src={logo} alt="On Time Creative" />
          <h1>On Time Creactive </h1>
          <h2>Digital Markting Consultant</h2>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
