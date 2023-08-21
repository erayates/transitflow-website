import React from "react";
import styles from "./style.module.css";

function Button({ color = "light", children }) {
  if (color === "light") {
    return (
      <button className={styles.lightButton}>
        <p className={styles.buttonEffectItem}></p>
        <p className={styles.text}>{children}</p>
      </button>
    );
  }
}

export default Button;
