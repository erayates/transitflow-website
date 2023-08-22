import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Button from "@/components/button";

function Services() {
  return (
    <section id="#services">
      <h2 className={styles.title}>Transporting Across The World</h2>
      <div className={styles.items}>
        <div className={styles.item}>
          <Image
            src="/assets/images/liquid-transportation.jpg"
            alt="Liquid Transportation Image"
            fill
          />
          <div className={styles.itemInfo}>
            <p>Liquid Transportation</p>
            <span>Premium Tankers</span>
          </div>
          <div className={styles.itemGradient}></div>
        </div>
        <div className={styles.item}>
          <Image
            src="/assets/images/packaging-solutions.jpg"
            alt="Packaging Solutions Image"
            fill
          />
          <div className={styles.itemInfo}>
            <p>Packaging Solutions</p>
            <span>Warehouse Management</span>
          </div>
          <div className={styles.itemGradient}></div>
        </div>
        <div className={styles.item}>
          <Image
            src="/assets/images/contract-logistics.jpg"
            alt="Contract Logistics Image"
            fill
          />
          <div className={styles.itemInfo}>
            <p>Contract Logistics</p>
            <span>Road Transportation</span>
          </div>
          <div className={styles.itemGradient}></div>
        </div>
        <div className={styles.item}>
          <Image
            src="/assets/images/warehouse-distribution.jpg"
            alt="Warehouse Distribution"
            fill
          />
          <div className={styles.itemInfo}>
            <p>Warehouse & Distribution</p>
            <span>Large Warehouse</span>
          </div>
          <div className={styles.itemGradient}></div>
        </div>
        <div className={styles.item}>
          <Image
            src="/assets/images/specialized-transport.jpg"
            alt="Specialized Transport Image"
            fill
          />
          <div className={styles.itemInfo}>
            <p>Specialized Transport</p>
            <span>Ocean Transports</span>
          </div>
          <div className={styles.itemGradient}></div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Button color="dark">More Work</Button>
      </div>
    </section>
  );
}

export default Services;
