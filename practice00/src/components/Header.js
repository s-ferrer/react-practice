/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import oneimage from "../images/one.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={oneimage} alt="logo" className="nav-logo" />

        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
