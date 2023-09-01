import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

function WhatWeDo() {
  return (
    <section id="#what-we-do" className={styles.container}>
      <div className={styles.whatWeDoHeader}>
        <p className={styles.subtitle}>What We Do</p>
        <h2 className={styles.title}>Safe & Reliable Cargo Solutions</h2>
      </div>
      <div className={styles.whatWeDoItem}>
        <div className={styles.itemInnerDiv}>
          <Image
            src="/assets/icons/sea-transport.svg"
            width={50}
            alt="Sea Transport Icon"
            height={50}
          />
          <div className={styles.itemInfo}>
            <h3 className={styles.itemTitle}>Sea Transport Services</h3>
            <p className={styles.itemDescription}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
        <div className={styles.itemInnerDiv}>
          <Image
            src="/assets/icons/air-fright.svg"
            alt="Air Fright Icon"
            width={50}
            height={50}
          />
          <div className={styles.itemInfo}>
            <h3 className={styles.itemTitle}>Air Fright Services</h3>
            <p className={styles.itemDescription}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.whatWeDoItem}>
        <div className={styles.itemInnerDiv}>
          <Image
            src="/assets/icons/warehousing.svg"
            alt="Warehousing Icon"
            width={50}
            height={50}
          />
          <div className={styles.itemInfo}>
            <h3 className={styles.itemTitle}>Warehousing Services</h3>
            <p className={styles.itemDescription}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
        <div div className={styles.itemInnerDiv}>
          <Image
            src="/assets/icons/local-shipping.svg"
            alt="Local Shipping Icon"
            width={50}
            height={50}
          />
          <div className={styles.itemInfo}>
            <h3 className={styles.itemTitle}>Air Fright Services</h3>
            <p className={styles.itemDescription}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
