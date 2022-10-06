import CartWidget from "../CartWidget";
import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" to="/">
              SERECH-CURSOS ONLINE
            </NavLink>
            <NavLink className="nav-link" to="/categoria/cursos">
              Cursos
            </NavLink>
            <NavLink className="nav-link" to="/categoria/proximos">
              Próximos Cursos
            </NavLink>
            <span>
            <NavLink className="nav-link" to="cart">
              <CartWidget />
            </NavLink>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
