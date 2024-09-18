import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h3 className={styles.title}>Hi, I'm Tanishka Aswal</h3>
        <p className={styles.description}>
        I am a passionate Software Developer and Web Development Enthusiast with strong expertise in Data Structures & Algorithms and Frontend Technologies.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/t.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
};