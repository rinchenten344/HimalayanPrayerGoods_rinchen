import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faBox,
  faEnvelope,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Mystyle.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Himalayan Prayer Goods</div>
        <div className="nav-links">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to="/about">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </Link>
          <Link to="/products">
            <FontAwesomeIcon icon={faBox} /> Products
          </Link>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
