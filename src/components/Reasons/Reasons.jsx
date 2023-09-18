import React from "react";
import "../Reasons/Reasons.css";
import Miel from "../../assets/Miel.jpg";

import abeja from "../../assets/Abeja-1.jpg"
import lugar from '../../assets/Lugar.jpg'
import balde from "../../assets/balde.jpg";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={abeja} alt="" />
        <img src={lugar} alt="" />
        <img src={Miel} alt="" />
        <img src={balde} alt="" />
      </div>
      <div className="right-r">

        <div>
          <span className="stroke-text">Beneficios de elegir </span>
          <span> miel de abeja</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Fuente de energía natural.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Rica en antioxidantes.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Alivia problemas gastrointestinales.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Posee propiedades antibacterianas.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Alivia la tos y dolor de garganta.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Favorece la salud cardiovascular.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Beneficios para el cuidado de la piel.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Versátil en la cocina.</span>
          </div>
      
        </div>

      

      </div>
    </div>
  );
};

export default Reasons;
