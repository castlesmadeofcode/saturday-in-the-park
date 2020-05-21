import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = (props) => {
  const manageLogout = () => {
    sessionStorage.removeItem("kennywood-token");
  };
  return (
    <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Saturday in the Park
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/myitinerary">
            My Itinerary
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={manageLogout} to="/login">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
