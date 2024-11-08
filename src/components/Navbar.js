import React from "react";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
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

        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            aria-checked={props.mode === "dark"}
            aria-label={
              props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"
            }
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
}
