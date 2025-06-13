import React from "react";
import myPic from "../assets/images/Mypic.png";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";

const About = () => {
  return (
    <div className="container py-5 px-2 my-5" id="about">
      <div className="row align-items-center text-center text-md-start">
        <div className="col-12 col-md-6 d-flex justify-content-center order-1 order-md-2 mb-4 mb-md-0">
          <img
            src={myPic}
            className="img-fluid rounded-3"
            style={{ maxWidth: "280px", height: "auto" }}
            alt="My profile"
          />
        </div>

        <div className="col-12 col-md-6 order-2 order-md-1">
          <h6 className="fw-bold subtitle" style={{ color: "#FDC435" }}>
            Frontend Developer
          </h6>
          <h2 className="title fw-bold text-white">
            Hello, my name is Vigneshwaran
          </h2>
          <p className="subtitle fs-6" style={{ color: "#828282" }}>
            Enthusiastic frontend developer with a solid foundation in HTML,
            CSS, and JavaScript, and experience using Tailwind, Bootstrap, and
            Sass. Seeking a frontend development internship to apply my skills
            in building responsive web applications and grow alongside industry
            professionals.
            <span className="ms-3 fs-6">
              <Link className="text-warning" to="/About2">
                Click here
              </Link>
            </span>
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start mt-3">
            <div style={{ minWidth: "180px" }}>
              <a
                href="/resume/VigneshCV.pdf"
                download
                className="w-100 d-block"
              >
                <button className="w-100 bg-warning text-white border-0 px-4 py-2 rounded download-btn">
                  <i className="fas fa-download me-2"></i>
                  Download CV
                </button>
              </a>
            </div>

            <div style={{ minWidth: "180px" }}>
              <a
                href="https://www.linkedin.com/in/vigneshwaran-s-540602271"
                target="_blank"
                className="w-100 d-block"
                rel="noopener noreferrer"
              >
                <button className="w-100 bg-white text-dark border border-dark px-4 py-2 rounded linkedin-btn">
                  <i className="fab fa-linkedin fa-sm me-2"></i>
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Contact />
    </div>
  );
};

export default About;
