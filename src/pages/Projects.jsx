import React, { useState } from "react";
import project1 from "../assets/images/project-1.png";
import Builderai from "../assets/images/builderai.png";
import MerchantPortal from "../assets/images/merchant.png";
import Navbar from "../components/Navbar";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "Wheatly hill Dental Project",
      description:
        "A single-page web application designed for a dental clinic to simplify booking and patient management.",
      image: project1,
    },
    {
      title: "Food Order-Delivery  Merchant-Portal",
      description:
        "Supported the development of a food ordering and delivery platform, including merchant and customer applications.",
      image: MerchantPortal,
    },
    {
      title: "Buider.ai Project",
      description:
        "Created a UI for a Builder.ai project.In the projects i created a full UI and also write functional code and check the code with test cases using jest and enzyme in react.js",
      image: Builderai,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container py-5" id="projects">
        <div className="text-center py-5">
          <h2 className="text-dark title fw-bold d-inline-block position-relative text-white">
            Projects
            <span
              className="d-block mx-auto mt-2"
              style={{
                height: "3px",
                width: "58px",
                backgroundColor: "#FDC435",
                borderRadius: "30px",
              }}
            ></span>
          </h2>
        </div>
        {projects.map((project, index) => (
          <div className="d-flex justify-content-center my-4" key={index}>
            <div
              className="card shadow-lg w-100 project-cards"
              style={{ maxWidth: "720px", border: "none" }}
            >
              <div
                className={`d-flex ${
                  index % 2 === 0
                    ? "flex-column-reverse flex-md-row"
                    : "flex-column-reverse flex-md-row-reverse"
                } align-items-center gap-3 p-3`}
              >
                <div className="card-body text-center text-md-start px-3">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                  <button
                    className="view-btn fw-semibold px-3 py-2 rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project
                  </button>
                </div>

                <div>
                  <img
                    src={project.image}
                    className="img-fluid rounded"
                    alt="project-1"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-labelledby="projectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="d-flex justify-content-center p-3">
              <h5 className="modal-title" id="projectModalLabel">
                {selectedProject?.title || "Project Title"}
              </h5>
            </div>
            <div className="modal-body text-center">
              {selectedProject && (
                <img
                  src={selectedProject.image}
                  className="img-fluid rounded mb-3"
                  alt="Project"
                />
              )}
              <p>{selectedProject?.description || "Projects-Description"}</p>
            </div>
            <div className="d-flex justify-content-center py-3">
              <button
                type="button"
                className="btn btn-warning text-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
