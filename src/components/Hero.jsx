import React from "react";
import "./Hero.css";
import "../App.css";
import Header from "./Header/Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import calories from "../assets/calories.jpg";
import calories2 from "../assets/calories2.jpg";
import foto2 from "../assets/foto2.jpg";
import { motion } from "framer-motion";
import foto from "../assets/foto.jpg";
import NumberCounter from "number-counter";
import { IoLogoWhatsapp } from 'react-icons/io';



const Hero = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best add */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Miel de Abeja 100% Natural de Apurímac</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">VENTA </span>
            <span>DE</span>
          </div>
          <div>
            <span>MIEL PURA</span>
          </div>
          <div className="description">
            <span>
              Descubre la auténtica esencia de la naturaleza con nuestra
              exclusiva Miel de Abeja 100% Natural Rodríguez. Cosechada
              cuidadosamente de las colmenas más prístinas, cada gota de nuestra
              miel encapsula la pureza y la vitalidad de las flores silvestres.
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures"></div>

        <div>
          <div>
            <div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="right-h">
        <motion.div
          initial={{ right: "1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
        </motion.div>

        {/* hero images */}
        <img src={foto} className="hero_image" alt="" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          className="hero_image_back"
          alt=""
        />

        {/* calories */}
        <div>
          <motion.div
            initial={{ right: "50rem" }}
            whileInView={{ right: "45rem" }}
            transition={transition}
            className="calories"
          >
            <img src={calories} alt="" />
            <img src={foto2} alt="" />
            <img src={calories2} alt="" />
          </motion.div>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=991313963"
        className="btn-wsp"
        target="_blank"
      >
        <IoLogoWhatsapp /> 
      </a>
    </div>
  );
};

export default Hero;
