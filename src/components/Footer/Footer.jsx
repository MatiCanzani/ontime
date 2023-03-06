import React from "react";
import "./styles.scss";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";



const Footer = () => {
  return (
    <div className="contact-info">
      <div className="locations">
        <h4>BUENOS AIRES</h4>
        <span>-</span>
        <h4> BOSTON</h4>
        <span>-</span>
        <h4>UK</h4>
      </div>
        <div className="social-media">
          <h4>Follow us</h4>
          <a href="https://www.instagram.com/ontime.creative" target="_blank">
          <FaInstagram  className="icon" />
          </a>
        </div>
    </div>
  );
};

export default Footer;
