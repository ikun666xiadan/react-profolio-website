import React from "react";
import "./index.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Y-sum</h1>
        <h5 className="text-light">前端工程师</h5>
        <CTA />
        <HeaderIcon />
        <div className="me">
          <img src={Me} className="img" alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll_down
        </a>
      </div>
    </header>
  );
}

export default Header;
