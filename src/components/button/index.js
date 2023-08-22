import React from "react";
import styles from "./style.module.css";

function Button({ color = "light", children }) {
  if (color === "light") {
    return (
      <button className={`${styles.button} ${styles.lightButton}`}>
        <p
          className={`${styles.buttonEffectItem} ${styles.lightButtonEffectItem}`}
        ></p>
        <p className={styles.text}>{children}</p>
      </button>
    );
  }

  if (color === "dark") {
    return (
      <button className={`${styles.button} ${styles.darkButton}`}>
        <p
          className={`${styles.buttonEffectItem} ${styles.darkButtonEffectItem}`}
        ></p>
        <p className={styles.text}>{children}</p>
      </button>
    );
  }
}

export default Button;
