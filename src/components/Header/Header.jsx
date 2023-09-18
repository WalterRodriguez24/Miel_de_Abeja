import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />

      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpen(false)}>
          <Link
              onClick={() => setMenuOpen(false)}
              activeClass="active"
              to="home"
              span={true}
              smooth={true}
            >
              INICIO
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}> <Link
              onClick={() => setMenuOpen(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              BENEFICIOS DE LA MIEL
            </Link></li>
          <li onClick={() => setMenuOpen(false)}>  <Link
              onClick={() => setMenuOpen(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              FOTOS
            </Link></li>
          {/* <li onClick={() => setMenuOpen(false)}>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Plans"
              span={true}
              smooth={true}
            >
              PRECIOS
            </Link>
          </li> */}
          <li onClick={() => setMenuOpen(false)}>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Testimonials"
              span={true}
              smooth={true}
            >
              TESTIMONIOS
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
