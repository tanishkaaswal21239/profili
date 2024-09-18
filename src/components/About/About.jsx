import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>EDUCATION</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/g.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
  <h2>GL Bajaj Institute of Tech & Management</h2>
  <p>
    Bachelor of Technology in<br/> Computer Science
    <span className={styles.rightAlignedText}>2021-2025 
      <br/> 8.4 CGPA</span>
  </p>
</div>

          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/g.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
  <h2>Ursuline Convent Sr. Sec. School</h2>
  <p>
    CBSE XIIth
    <span className={styles.rightAlignedText}>2021 
      <br/>94%</span>
  </p>
</div>

          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/g.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
  <h2>Ursuline Convent Sr. Sec. School</h2>
  <p>
    CBSE Xth
    <span className={styles.rightAlignedText}>2019
      <br/> 98.2%</span>
  </p>
</div>

          </li>
        </ul>
      </div>
    </section>
  );
};
