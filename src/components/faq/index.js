"use client";

import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";

import { BsTelephone } from "react-icons/bs";
import Button from "../button";

function FAQ() {
  const accordions = useRef([]);

  const handleAccordionClick = (idx) => {
    if (accordions.current.children[idx].children[1].style.display === "none") {
      accordions.current.children[idx].children[0].children[1].style.rotate =
        "90deg";
      accordions.current.children[idx].children[1].style.display = "block";
      return;
    }
    accordions.current.children[idx].children[0].children[1].style.rotate =
      "0deg";
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
                  <h3>What payment methods are supported?</h3>
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
                  <h3>What options for logistics plans are available?</h3>
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
                onClick={() => handleAccordionClick(3)}
              >
                <div className={styles.accordionHeader}>
                  <h3>Can i specify a delivery date when ordering?</h3>
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
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.image}>
          <Image
            src="/assets/images/faq-photo.jpg"
            alt="FAQ Photo"
            fill
            objectFit="cover"
          />
        </div>
        <div className={styles.rightBox}>
          <p className={styles.rightBoxSubtitle}>{"Let's Talk"}</p>
          <h3 className={styles.rightBoxTitle}>
            You Need Any Help? Get Free Consultation
          </h3>
          <div>
            <div>
              <BsTelephone />
            </div>
            <div>
              <p>Have Any Questions</p>
              <p>{"(00) 112 365 489"}</p>
            </div>
          </div>
          <Button>Contact Us</Button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
