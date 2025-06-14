import React from "react";
import { Link } from "react-router-dom";

const Projects2 = () => {
  const experiences = [
    {
      date: "March 2024 - January 2025",
      role: "Front-End Developer (React.js)",
      topic: "CRUD Operations Private Limeted,Chennai-Urapakkam",
      description:
        "I joined the company on january-2024 I completed my 3 months internship there,After i work as a junior Frontend devloper in (REACT.JS) Domain",
    },
    {
      date: "",
      role: "",
      topic: "",
      description: "Currently seeking new opportunities",
    },
  ];

  const education = [
    {
      date: "2017 - 2020",
      degree: "B.Sc. Information Technology",
      institution: "PKN Arts and Science College",
      description:
        "Graduated with First Class. Focused on web development, data structures, and algorithms.Scored 72%",
    },
    {
      date: "2021 - 2023",
      degree: "Master of Computer Applications",
      institution: "VHNSN College,Virdhunagar",
      description:
        "Specialized in Computer Application.Graduated with First Class and Scored 75%.",
    },
    {
      date: "2023 - 2023 (4 months)",
      degree: "(Course Completion) Frontend-Development in React js",
      institution: "WeAlwin Technologies (Stay Unique)",
      description:
        "I Completed Front-End Development course in React-js in WeAlin Technlogies Madurai",
    },
  ];

  return (
    <div className="container">
      <div className="text-center py-5">
        <h2 className="title fw-bold d-inline-block position-relative text-white">
          Work Experience
          <span
            className="d-block mx-auto mt-2"
            style={{
              height: "3px",
              width: "80px",
              backgroundColor: "#FDC435",
              borderRadius: "30px",
            }}
          ></span>
        </h2>
      </div>

      <div className="row g-4">
        {experiences.map((exp, index) => (
          <div className="col-md-6 col-lg-6" key={index}>
            <div
              className={`p-3 rounded-4 shadow h-100 project-cards ${
                index === 1 ? "bg-warning text-light" : "bg-white text-warning"
              }`}
            >
              <p
                className={`mb-1 ${index === 1 ? "text-light" : "text-muted"}`}
              >
                {exp.date}
              </p>
              <h5 className={`fw-bold mb-2 ${index === 1 ? "text-light" : ""}`}>
                {exp.role}
              </h5>
              <h6 className={index === 1 ? "text-light" : "text-secondary"}>
                {exp.topic}
              </h6>
              <p
                className={`mt-3 ${index === 1 ? "text-light" : "text-muted"}`}
              >
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center py-5 mt-5">
        <h2 className="title fw-bold d-inline-block position-relative text-white">
          Educational Qualification
          <span
            className="d-block mx-auto mt-2"
            style={{
              height: "3px",
              width: "80px",
              backgroundColor: "#FDC435",
              borderRadius: "30px",
            }}
          ></span>
        </h2>
      </div>

      <div className="row g-4">
        {education.map((edu, index) => (
          <div className="col-md-6 col-lg-6" key={index}>
            <div
              className={`p-3 rounded-4 shadow h-100 project-cards ${
                index === 0 ? "bg-warning text-light" : "bg-white text-warning"
              }`}
            >
              <p
                className={`mb-0 ${index === 0 ? "text-light" : "text-muted"}`}
              >
                {edu.date}
              </p>
              <h5 className={`fw-bold mb-2 ${index === 0 ? "text-light" : ""}`}>
                {edu.degree}
              </h5>
              <h6 className={index === 0 ? "text-light" : "text-secondary"}>
                {edu.institution}
              </h6>
              <p
                className={`mt-3 ${index === 0 ? "text-light" : "text-muted"}`}
              >
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5 text-center">
        <Link
          to=""
          className="text-light bg-warning border-0 rounded-3 px-3 py-2 subtitle text-decoration-none"
          style={{ width: "250px" }}
        >
          See More...
        </Link>
      </div>
    </div>
  );
};

export default Projects2;
