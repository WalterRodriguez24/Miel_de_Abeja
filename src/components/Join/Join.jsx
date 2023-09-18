import React from "react";
import "../Join/Join.css";
import emailjs from '@emailjs/browser'
import {useRef} from 'react'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zp0gme8', 'template_oswqfnk', form.current, '3WU39GtzzlSm3OD3p')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">CONTACTANOS</span>
          <span> PARA  </span>
        </div>
        <div>
          <span> PEDIDOS </span>
          <span className="stroke-text">Y CONSULTAS</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
