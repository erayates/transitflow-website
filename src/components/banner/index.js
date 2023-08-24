import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

function Banner({ subtitle, title, image }) {
  return (
    <div className={styles.banner}>
      <div className="container">
        <p className={styles.subtitle}>{subtitle}</p>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.image}>
        <Image
          src={`/assets/images/banner/${image}`}
          alt={image}
          fill
          objectFit="cover"
        />
      </div>
      <div className={styles.gradient}></div>
    </div>
  );
}

export default Banner;
