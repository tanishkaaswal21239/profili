import React from "react";
import styles from "./Cv.module.css";
export const Downloadcv = () => {
  return (
    <div className={styles.cvDownloadSection}>
        <h2>Download My CV</h2>
        <a href="https://drive.google.com/file/d/1yrU1giePjjnCZiGms08R2dg3ksFuTrGR/view?usp=sharing" download className={styles.cvDownloadButton}>
          Download CV
        </a>
      </div>
  );
};

