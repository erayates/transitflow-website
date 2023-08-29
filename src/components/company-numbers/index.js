import React from "react";

import styles from "./style.module.css";

function CompanyNumbers() {
  return (
    <section id="#company-numbers">
      <div className={styles.innerNumbers}>
        <div>
          <p>24</p>
          <div className={styles.square} />
          <span>Our Location</span>
        </div>
        <div>
          <p>1294</p>
          <div className={styles.square} />
          <span>Delivered Packages</span>
        </div>
        <div>
          <p>3594</p>
          <div className={styles.square} />
          <span>Satisfied Clients</span>
        </div>
        <div>
          <p>247+</p>
          <div className={styles.square} />
          <span>Owned Vehicles</span>
        </div>
      </div>
    </section>
  );
}

export default CompanyNumbers;
