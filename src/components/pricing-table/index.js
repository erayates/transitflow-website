import React from "react";
import styles from "./style.module.css";

import Button from "@/components/button";

function PricingTable() {
  return (
    <section id="#pricing-table" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p>Pricing</p>
          <h2>Our Best Pricing</h2>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <h3>Basic</h3>
            <div className={styles.itemPrice}>
              <p>$39</p>
              <span>/ month</span>
            </div>

            <ul>
              <li>Single Truck</li>
              <li>Full Insurance</li>
              <li>500 Km</li>
              <li>Real-time rate shopping</li>
            </ul>

            <Button color="dark">Choose Plan</Button>
          </div>
          <div className={styles.item}>
            <h3>Standart</h3>
            <div className={styles.itemPrice}>
              <p>$59</p>
              <span>/ month</span>
            </div>

            <ul>
              <li>Single Truck</li>
              <li>Full Insurance</li>
              <li>500 Km</li>
              <li>Real-time rate shopping</li>
            </ul>

            <Button color="light">Choose Plan</Button>
          </div>
          <div className={styles.item}>
            <h3>Premium</h3>
            <div className={styles.itemPrice}>
              <p>$89</p>
              <span>/ month</span>
            </div>

            <ul>
              <li>Single Truck</li>
              <li>Full Insurance</li>
              <li>500 Km</li>
              <li>Real-time rate shopping</li>
            </ul>

            <Button color="dark">Choose Plan</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTable;
