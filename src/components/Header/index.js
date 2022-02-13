import React from "react";
import { Link } from "gatsby";
import Navbar from "../Navbar";
import "./styles.scss";

const Header = () => {
  return (
    <header className="container">
      <Link className="link" to="/">
        OnTime
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
