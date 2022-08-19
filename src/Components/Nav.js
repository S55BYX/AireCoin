import { useState } from "react";
import {
  RiLayout4Fill,
  RiBarChartHorizontalFill,
  RiCloseLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
console.log(props.respNav)
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-logo-container">
          <RiLayout4Fill className="ri-lg" />
          <h1 className="nav-logo">AireCoin</h1>
        </div>
      </Link>
      <div className="nav-right">
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
        <button className="nav-btn nav--close-btn" onClick={() => props.setRespNav(false)}>
          <RiCloseLine />
        </button>
      </div>
      <button className="nav-btn" onClick={() => props.setRespNav(true)}>
        <RiBarChartHorizontalFill />
      </button>
    </div>
  );
}

export default Nav;
