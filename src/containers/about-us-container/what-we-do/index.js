import Image from "next/image";
import React from "react";

import styles from "./style.module.css";
import Button from "@/components/button";

function WhatWeDo() {
  return (
    <section id="#what-we-do" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.subtitle}>What We Do</p>
          <h2 className={styles.title}>Our Logistics Services</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.item}>
            <Image
              src="/assets/icons/sea-transport.svg"
              alt="Sea Transport Icon"
              width={50}
              height={50}
            />
            <h3 className={styles.itemTitle}>Sea Transport Services</h3>
            <p className={styles.itemDesc}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
          <div className={styles.item}>
            <Image
              src="/assets/icons/warehousing.svg"
              alt="Warehousing Icon"
              width={50}
              height={50}
            />
            <h3 className={styles.itemTitle}>Warehousing Services</h3>
            <p className={styles.itemDesc}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
          <div className={styles.item}>
            <Image
              src="/assets/icons/air-fright.svg"
              alt="Air Fright Icon"
              width={50}
              height={50}
            />
            <h3 className={styles.itemTitle}>Air Fright Services</h3>
            <p className={styles.itemDesc}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
          <div className={styles.item}>
            <Image
              src="/assets/icons/project-exhibition.svg"
              alt="Project Exhibition Icon"
              width={50}
              height={50}
            />
            <h3 className={styles.itemTitle}>Project & Exhibition</h3>
            <p className={styles.itemDesc}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
          <div className={styles.item}>
            <Image
              src="/assets/icons/local-shipping.svg"
              alt="Local Shipping Icon"
              width={50}
              height={50}
            />
            <h3 className={styles.itemTitle}>Local Shipping Services</h3>
            <p className={styles.itemDesc}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
          <div className={styles.item}>
            <Image
              src="/assets/icons/customer-clearance.svg"
              alt="Sea Transport Icon"
              width={50}
              height={50}
            />
            <h3 className={styles.itemTitle}>Customer Clearance</h3>
            <p className={styles.itemDesc}>
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>

        <div className={styles.button}>
          <Button color="dark">More Works</Button>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
