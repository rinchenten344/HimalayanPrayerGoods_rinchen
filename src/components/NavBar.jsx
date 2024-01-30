import React from "react";
import { Link } from "react-router-dom";
import "../mystyles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faShoppingCart,
  faSignInAlt,
  faTh,
  faEnvelope,
  faUser,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const handleLogout = () => {
  localStorage.removeItem("token");
  // Update state and redirect
  history.push("/login");
  localStorage.removeItem("token");
  // Update state and/or redirect to login page
};

function NavBar() {
  return (
    <nav>
      <div className="navbar-title">
        <span className="full-title">Himalayan Prayer Goods</span>
        <span className="short-title">HPG</span>
      </div>
      <div className="navbar-links">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/About">
          <FontAwesomeIcon icon={faInfoCircle} />
        </Link>
        <Link to="/products">
          <FontAwesomeIcon icon={faTh} />
        </Link>
        <Link to="/Contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <Link to="/login">
          <FontAwesomeIcon icon={faSignInAlt} />
        </Link>
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faChartLine} />
        </Link>
      </div>
      <button onClick={handleLogout}>Logout</button> {/* Logout Button */}
    </nav>
  );
}

export default NavBar;
