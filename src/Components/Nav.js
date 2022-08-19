import React from "react";
import { RiLayout4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-logo-container">
          <RiLayout4Fill className="ri-lg" />
          <h1 className="nav-logo">AireCoin</h1>
        </div>
      </Link>
      <ul className="nav-list">
        <li>
          <Link to="/NFT">NFT</Link>
        </li>
        <li>
          <Link to="/docs">Documentation</Link>
        </li>
        <li>
          <Link to="/News">News</Link>
        </li>
      </ul>
      <button className="nav-cta">Connect Wallet</button>
    </div>
  );
}

export default Nav;
