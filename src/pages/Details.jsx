import React from "react";
import web3 from "../assets/images/web 3.0.png";
import cktemplate from "../assets/images/cktemplate.png";
import shopcart from "../assets/images/shopcart.png";
import demovideo1 from "../assets/video/demovideo-1.mp4";
import demovideo2 from "../assets/video/demovideo-2.mp4";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  const myWorks = [
    {
      title: "Web 3.0 template UI",
      image: web3,
      description:
        "I developed this ui during my training using HTML,Css,and Bootstrap.Its a web 3.0 design",
      isVideo: false,
    },
    {
      title: "Shop Cart UI",
      image: shopcart,
      description:
        "I developed this ui during my training using HTML,Css,and Bootstrap.Its a shopping cart UI design",
      isVideo: false,
    },
    {
      title: "Tab navigation app",
      image: web3,
      description:
        "I developed a tab navigation app using HTML,Css,Javascript,React js",
      video: demovideo2,
      isVideo: true,
    },
    {
      title: "Portfolio UI",
      image: web3,
      description:
        "I Developed this ui during my traning using HTML,Sass,javascript and React js",
      video: demovideo1,
      isVideo: true,
    },
    // {
    //   title: "Web 3.0 template",
    //   image: web3,
    //   description: "lorem",
    //   isVideo: false,
    // },
    {
      title: "Ck Template UI",
      image: cktemplate,
      description:
        "I developed this ui during my training using HTML,Css,and Bootstrap.its a bussiness template",
      isVideo: false,
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
      <div className="row g-4 my-2">
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
                className={`fw-bold p-3 mb-2 text-center subtitle ${
                  index % 2 === 0 ? "text-light" : "text-warning"
                }`}
              >
                {work.title}
              </h3>
              {work.isVideo ? (
                <video
                  controls
                  controlsList="nodownload"
                  className="img-fluid rounded-3"
                  style={{ width: "100%" }}
                >
                  <source src={work.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={work.image}
                  className="img-fluid rounded-2"
                  alt={work.title || "my-works"}
                />
              )}
              <p
                className={`my-3 text-center ${
                  index % 2 === 0 ? "text-light" : "text-muted"
                }`}
              >
                {work.description}
              </p>
              <div className="d-flex justify-content-center align-items-center mt-5 text-center">
                <button
                  onClick={handleNavigate}
                  className={`px-3 py-2 subtitle ${
                    index % 2 === 1
                      ? "text-light bg-warning"
                      : "bg-primary text-light"
                  } border-0 rounded-3 subtitle text-decoration-none`}
                  style={{ width: "250px" }}
                >
                  See My works
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
