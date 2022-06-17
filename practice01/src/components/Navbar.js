import React from "react";
import logoreact from "../images/logoreact.png";

export default function Navbar() {
  return (
    <nav>
      <img scr={logoreact} alt="logo" className="nav-log" />

      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  );
}
