import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container">
          <a className="logo text-decoration-none link-danger navbar-brand" href="/">
            Todo Manager
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              style={{ fontSize: "20px", color: "#ffffff" }}
              className="fa-solid fa-bars"
            ></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-lg-0">
              <li className="nav-item">
                <Link className="nav-link link-danger" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="addtodo">
                  Add todo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="completedtodos">
                  Completed it!
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
