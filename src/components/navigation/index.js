import React, { useState } from "react";
import style from "./style.module.css";
import logo from "../../assets/img/logo.png";
import resume from "../../assets/img/Resume.pdf"

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className={style.header}>
      <div onClick={handleToggle} className={style.menuBtn}>
        <span
          className={`${style.menuBtnBurger} ${
            toggle ? `${style.open}` : null
          }`}
        ></span>
      </div>
      <nav className={`${style.nav} ${toggle ? `${style.open}` : null}`}>
      <div className={style.navLogo}>
        <a href="/"><img src={logo} alt="logo" /></a>
      </div>
        <ul
          className={`${style.navItemsContainer} ${
            toggle ? `${style.open}` : null
          }`}
        >
          <li className={`${style.item} ${toggle ? `${style.open}` : null}`}>
            <a href="#about">About</a>
          </li>
          <li className={`${style.item} ${toggle ? `${style.open}` : null}`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`${style.item} ${toggle ? `${style.open}` : null}`}>
            <a href="#contact">Contact</a>
          </li>
          <li className={`${style.item} ${toggle ? `${style.open}` : null}`}>
            <a href={resume}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
