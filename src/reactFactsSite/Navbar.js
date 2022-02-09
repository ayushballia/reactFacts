import React from "react";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img
        src="https://res.cloudinary.com/dz95mun6e/image/upload/v1643371818/logo/logo512_oleyqb.png"
        alt="react-logo"
        className="nav--logo"
      />
      <h3 className="nav--title">ReactFacts</h3>
      <div className="toggler">
        <p className="toggler--light">light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler-dark">dark</p>
      </div>
    </nav>
  );
}
