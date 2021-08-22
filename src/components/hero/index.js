import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.css";

const Hero = () => {
  const [letters, setLetters] = useState("");

  const name = "Hi I'm Kenneth";
  const index = useRef(0);

  useEffect(() => {
    const tick = () => {
      setLetters((prev) => prev + name[index.current]);
      index.current++;
    };
    if (index.current < name.length) {
      let addChar = setInterval(tick, 400);
      return () => clearInterval(addChar);
    }
  }, [letters]);

  return (
    <div className={style.heroContainer}>
      <div className={style.heroTextContainer}>
        <div>
          <h1 id={style.heroTextAnimationHeading}>{letters}</h1>
        </div>
        <div>
          <h2 id={style.heroTextHeadingTwo}>I build things for the web</h2>
        </div>
        <div className = {style.heroCtaBtnContainer}>
          <a id={style.heroCtaBtn} href="../index.html">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
