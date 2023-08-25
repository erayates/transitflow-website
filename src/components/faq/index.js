"use client";

import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";

function FAQ() {
  const accordions = useRef([]);

  const handleAccordionClick = (idx) => {
    if (accordions.current.children[idx].children[1].style.display === "none") {
      accordions.current.children[idx].children[1].style.display = "block";
      return;
    }
    accordions.current.children[idx].children[1].style.display = "none";
  };

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.subtitle}>FAQ</p>
            <h2 className={styles.title}>Frequently Asked Questions</h2>

            <div className={styles.accordions} ref={accordions}>
              <div
                className={styles.accordion}
                onClick={() => handleAccordionClick(0)}
              >
                <div className={styles.accordionHeader}>
                  <h3>How can I pay for your logistics services</h3>
                  <p>{">"}</p>
                </div>
                <div className={styles.accordionContent}>
                  <p className={styles.accordionDescription}>
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive.
                  </p>
                </div>
              </div>
              <div
                className={styles.accordion}
                onClick={() => handleAccordionClick(1)}
              >
                <div className={styles.accordionHeader}>
                  <h3>How can I pay for your logistics services</h3>
                  <p>{">"}</p>
                </div>
                <div className={styles.accordionContent}>
                  <p className={styles.accordionDescription}>
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive.
                  </p>
                </div>
              </div>
              <div
                className={styles.accordion}
                onClick={() => handleAccordionClick(2)}
              >
                <div className={styles.accordionHeader}>
                  <h3>How can I pay for your logistics services</h3>
                  <p>{">"}</p>
                </div>
                <div className={styles.accordionContent}>
                  <p className={styles.accordionDescription}>
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.image}>
              <Image src="/assets/images/faq-photo.jpg" alt="FAQ Photo" fill />
            </div>
            <div className={styles.rightBox}>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
