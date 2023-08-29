import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

function BlogBanner({ title, date, image }) {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.dateContainer}>
          <Image
            src="/assets/icons/calendar-white.svg"
            alt="Calendar Icon"
            width={50}
            height={50}
          />
          <div>
            <p>{date.slice(0, 2)}</p>
            <span>{date.slice(2, date.length)}</span>
          </div>
        </div>
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

export default BlogBanner;
