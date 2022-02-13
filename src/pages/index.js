import React from "react";
import Layout from "../components/layout";
import "../styles/main.scss";
import "normalize.css";
import Contact from "../components/Contact";
import Works from "../components/Works";
import About from "../components/About";
import Hero from "../components/Hero";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <Works />
        <About />
        <Contact />
      </main>
    </Layout>
  );
};

export default IndexPage;
