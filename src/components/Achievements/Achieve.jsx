import React from "react";
import styles from "./achieve.module.css";  // Adding ?inline for Vite compatibility
import { getImageUrl } from "../../utils";

export const Achievements = () => {
  return (
    <section className={styles.experienceSection} id="achievements">
           <h2 className={styles.title}>ACHIEVEMENTS</h2>
      <br/>
      <div className={styles.experienceitem}>
        <p>
          <img src={getImageUrl("about/t.png")} alt="Cursor icon" />
          Devpost Hackathon MediHacks-2023
          <br />
          1st Prize (Under all Categories).
        </p>
        </div>
        <div className={styles.experienceitem}>
        <p>
          <img src={getImageUrl("about/t.png")} alt="Cursor icon" />
          Finalist at IT-TechFest-2024 organised by SAP Labs
        </p>
      </div>
    </section>
  );
};
