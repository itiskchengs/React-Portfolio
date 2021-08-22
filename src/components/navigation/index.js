import React, { useState } from "react";
import style from "./style.module.css";
import logo from "../../assets/img/logo.png";

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
        <img src={logo} alt="logo" />
      </div>
        <ul
          className={`${style.navItemsContainer} ${
            toggle ? `${style.open}` : null
          }`}
        >
          <li className={`${style.item} ${toggle ? `${style.open}` : null}`}>
            About
          </li>
          <li className={`${style.item} ${toggle ? `${style.open}` : null}`}>
            Portfolio
          </li>
          <li className={`${style.item} ${toggle ? `${style.open}` : null}`}>
            Contact
          </li>
          <li className={`${style.item} ${toggle ? `${style.open}` : null}`}>
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
