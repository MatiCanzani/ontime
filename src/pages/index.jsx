import React from "react";
import Layout from "../components/Layout";
import "../styles/main.scss";
import "normalize.css";
import Contact from "../components/Contact/Contact";
import Works from "../components/Works/Works";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <main>
          <Hero />
          <Works />
          <About />
          <Contact />
        </main>
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;
