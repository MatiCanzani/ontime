import * as React from "react";
import Layout from "../components/layout";
import "../styles/main.scss";
import "normalize.css";
import logo from "../images/otc-logo.png";
import "normalize.css";


const IndexPage = () => {
  return (
    <Layout>
      <main>
        <div className="container">
          <img className="logo" src={logo} alt="On Time Creative" />
          <h1>on time creative </h1>
          <h2>Branding & Marketing Consultant</h2>
        </div>
        <div className="test"></div>
      </main>
    </Layout>
  );
};

export default IndexPage;
