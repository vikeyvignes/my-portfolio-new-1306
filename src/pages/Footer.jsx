import React from "react";
import bgfooter from "../assets/images/Footer Vector.png";

const Footer = () => {
  return (
    <div>
      <div className="container py-1">
        <div className="d-flex justify-content-center align-items-center gap-3">
          <i
            className="fab fa-instagram fa-lg"
            style={{ color: "#FFD43B" }}
          ></i>
          <i className="fab fa-linkedin fa-lg" style={{ color: "#FFD43B" }}></i>
          <i className="fas fa-envelope fa-lg" style={{ color: "#FFD43B" }}></i>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3 py-3">
          <i
            className="fab fa-whatsapp-square fa-lg"
            style={{ color: "#FFD43B" }}
          ></i>
          <p className="mb-0 text-light">+91-8610544585</p>
        </div>
        <p
          className="subtitle fs-6 text-center py-3"
          style={{ color: "#828282" }}
        >
          Vignesh S 2025
        </p>
      </div>
      <div>
        <img src={bgfooter} className="img-fluid" alt="footer"/>
      </div>
    </div>
  );
};

export default Footer;
