import React from "react";
import styles from "./style.module.css";
import Button from "@/components/button";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.heroSubTitle}>
          Logistics & Supply Chain Solutions
        </p>
        <h1 className={styles.heroTitle}>
          Your Gateway to any Destination in the World
        </h1>
        <p className={styles.heroDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
          distinctio? Maxime veniam odio alias facilis quod perferendis culpa
          laborum nulla soluta. Quidem tempora soluta quibusdam blanditiis harum
          quasi magnam vitae.
        </p>
        <Button color="light">Explore More</Button>
      </div>
    </div>
  );
}

export default Hero;
