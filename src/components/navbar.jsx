import React from "react";
import { NavLink } from "react-router-dom";
import auth from "../services/authService";

const Navbar = () => {
  let isLogged = window.location.pathname != "login";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Workout
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/videos">
                Videos
              </NavLink>
            </li>
            {isLogged && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={() => {
                    auth.logout();
                  }}
                >
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
