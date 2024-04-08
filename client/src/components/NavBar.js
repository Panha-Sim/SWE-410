import React from "react";
//import { Link } from 'react-router-dom';

export default function NavBar() {
  return (

    // ===== Start of Bootstrap Navbar
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/FFFFFF/external-mountain-location-vitaliy-gorbachev-fill-vitaly-gorbachev.png" alt="REI Logo" width="40" height="40" className="d-inline-block align-top" />
          <span className="rei-text">REI</span>
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Locations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">
                Admin
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-light me-2" type="button">
              Sign In
            </button>
            <button className="btn btn-success" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
