import React from "react";
import web3 from "../assets/images/web 3.0.png";
import { Link } from "react-router-dom";

const Details = () => {
  const myWorks = [
    {
      title: "Web 3.0 template",
      image: web3,
      description: "lorem",
    },
    {
      title: "Web 3.0 template",
      image: web3,
      description: "lorem",
    },
    {
      title: "Web 3.0 template",
      image: web3,
      description: "lorem",
    },
    {
      title: "Web 3.0 template",
      image: web3,
      description: "lorem",
    },
    {
      title: "Web 3.0 template",
      image: web3,
      description: "lorem",
    },
    {
      title: "Web 3.0 template",
      image: web3,
      description: "lorem",
    },
  ];
  return (
    <div className="container my-4 py-4">
      <div className="text-center py-5">
        <h2 className="title fw-bold d-inline-block position-relative text-white">
          My Works
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
      <div className="row g-4 my-3">
        {myWorks.map((work, index) => (
          <div className="col-md-4 col-lg-4" key={index}>
            <div
              className={`p-3 rounded-4 shadow h-100 project-cards ${
                index % 2 === 0
                  ? "bg-warning text-light"
                  : "bg-white text-warning"
              }`}
            >
              <h3
                className={`fw-bold p-3 mb-2 text-center ${
                  index % 2 === 0 ? "text-light" : "text-warning"
                }`}
              >
                {work.title}
              </h3>
              <img src={work.image} className="img-fluid rounded-2" alt="" />
              <p
                className={`mt-3 ${
                  index % 2 === 0 ? "text-light" : "text-muted"
                }`}
              >
                {work.description}
              </p>
              <div className="d-flex justify-content-center align-items-center mt-5 text-center">
                <Link
                  to="/details"
                  className={`px-3 py-2 ${
                    index % 2 === 1
                      ? "text-light bg-warning"
                      : "bg-primary text-light"
                  } border-0 rounded-3 subtitle text-decoration-none`}
                  style={{ width: "250px" }}
                >
                  See My works
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
