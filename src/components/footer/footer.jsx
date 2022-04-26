import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="row justify-content-between">
        <div className="col-sm-6">
          <h1>
            REMY<sup>s</sup>
          </h1>
          <ul className="social">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-4">
          <ul className="site-map">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center">
        2022 &copy; Remy's / All Rights Reserved / SideHustleNG-Group83
      </p>
    </footer>
  );
};

export default Footer;
