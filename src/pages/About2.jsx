import React from "react";
import { Link } from "react-router-dom";
import myPic from "../assets/images/Mypic.png";
import circlebackground from "../assets/images/Ellipse 1.png";

const About2 = () => {
  return (
    <div className="container py-5 px-2">
      <div className="row align-items-center text-center text-md-start">
        {/* IMAGE COLUMN */}
        <div className="col-12 col-md-6 d-flex justify-content-center order-1 order-md-2 mb-4 mb-md-0">
          <div
            className="position-relative"
            style={{ width: "100%", maxWidth: "400px" }}
          >
            {/* Circle Background */}
            <img
              src={circlebackground}
              alt="Background circle"
              className="img-fluid w-100"
              style={{ position: "relative", zIndex: 0 }}
            />

            <img
              src={myPic}
              alt="My profile"
              className="img-fluid rounded-circle position-absolute start-50 translate-middle"
              style={{
                width: "88%",
                height: "auto",
                zIndex: 1,
                top: "125px",
              }}
            />
          </div>
        </div>

        <div className="col-12 col-md-6 order-2 order-md-1">
          <h2 className="title fw-bold text-white">About Me</h2>
          <p className="subtitle fs-6" style={{ color: "#828282" }}>
            <span className="text-warning fw-semibold fs-5 me-1">
              Hi, I am VigneshWaran
            </span>
            A Enthusiastic frontend developer with a solid foundation in HTML,
            CSS, and JavaScript, and experience using Tailwind, Bootstrap, and
            Sass. Seeking a frontend development internship to apply my skills
            in building responsive web applications and grow alongside industry
            professionals.
            <br />
            <span className="fs-6">
              <Link className="text-warning text-decoration-none" to="/">
                Go to Home Page
              </Link>
            </span>
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start mt-5">
            <div style={{ minWidth: "180px" }}>
              <a
                href="/resume/VigneshCV.pdf"
                download
                className="w-100 d-block"
              >
                <button className="w-100 bg-warning text-white border-0 px-4 py-2 rounded download-btn">
                  <i className="fas fa-download me-2"></i>
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
