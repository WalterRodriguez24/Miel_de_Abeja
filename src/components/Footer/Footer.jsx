import React from "react";
import "../Footer/Footer.css";
import Githud from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />

      <div className="footer">
        {/* <div className="social-links">
          <img src={Githud} alt="" />
          <img src={Instagram} alt="" />
          <img src={linkedin} alt="" />
        </div> */}
      <div className="logo-f">
        <img src={logo} alt="" />
      </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
