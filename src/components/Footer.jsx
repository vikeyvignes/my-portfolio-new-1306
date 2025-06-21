import React from "react";
const Footer = () => {
  return (
    <div className="py-3 px-2 rounded-top-2" style={{ background: "#FDC435" }}>
      <div className="container py-3">
        <div className="d-flex justify-content-center align-items-center gap-3">
          <i className="fab fa-instagram fa-lg footer-icon instagram-icon"></i>
          <i className="fab fa-linkedin fa-lg footer-icon linkedin-icon"></i>
          <i className="fas fa-envelope fa-lg footer-icon mail-icon"></i>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3 py-3">
          <i className="fab fa-whatsapp-square fa-lg footer-icon whatsapp-icon"></i>
          <p className="my-2 text-light fw-semibold">+91-8610544585</p>
        </div>
        <p
          className="subtitle fw-bold fs-6 m-0 text-center py-3"
          style={{ color: "#333" }}
        >
          © 2025 Vignesh Viki. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
