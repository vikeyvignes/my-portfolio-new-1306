import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-0 my-0">
      <div className="container">
        <a className="navbar-brand fw-lighter subtitle" href="/">
          <span style={{ color: "#FDC435" }} className="fw-bolder fs-2">
            V
          </span>
          igneshwaran
        </a>

        <button
          style={{ width: "40px" }}
          className="navbar-toggler p-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ width: "20px" }} />
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbar}>
                <span style={{ color: "#FDC435" }} className="fw-bold fs-3">
                  H
                </span>
                ome
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeNavbar}>
                <span style={{ color: "#FDC435" }} className="fw-bold fs-3">
                  P
                </span>
                rojects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#workexp" onClick={closeNavbar}>
                <span style={{ color: "#FDC435" }} className="fw-bold fs-3">
                  E
                </span>
                xperiance
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education" onClick={closeNavbar}>
                <span style={{ color: "#FDC435" }} className="fw-bold fs-3">
                  E
                </span>
                ducation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNavbar}>
                <span style={{ color: "#FDC435" }} className="fw-bold fs-3">
                  C
                </span>
                ontact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
