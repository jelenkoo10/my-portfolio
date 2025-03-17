import { useState, useRef } from "react";
import { gsap } from "gsap";
import HelloSvg from "../images/illustrations/hello.svg";
import GitSvg from "../images/icons/git.svg";
import ReactSvg from "../images/icons/react.svg";
import CssSvg from "../images/icons/css.svg";

function Header() {
  return (
    <header>
      <section className="flex justify-between items-center p-5" id="home">
        <img
          src={require("../images/icons/welcome.png")}
          alt="Icon that says `welcome`"
          className="w-20"
        />
        <nav></nav>
      </section>

      <section className="header-illustration">
        <div className="illustration">
          <img src={HelloSvg} alt="`Hello` illustration" className="hello" />
          <img src={GitSvg} alt="Git icon" className="git-icon" />
          <img src={ReactSvg} alt="React icon" className="react-icon" />
          <img src={CssSvg} alt="CSS icon" className="css-icon" />
        </div>
        <div className="introduction">
          <h1 id="header-title">Hello world! I am Veljko.</h1>
          <p className="header-desc">
            frontend developer | software engineering student
          </p>
          <button className="header-btn">Let me introduce myself</button>
        </div>
      </section>
    </header>
  );
}

export default Header;
