import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

function HowWeWorks() {
  return (
    <section id="#how-we-works" className={styles.section}>
      <div className="container">
        <p className={styles.subtitle}>Our Goodness</p>
        <h2 className={styles.title}>How We Works</h2>

        <div className={styles.content}>
          <div className={styles.left}>
            <Image
              src="/assets/images/how-we-works-image.jpg"
              alt="How We Works Image"
              objectFit="cover"
              fill
            />
            <Image
              src="/assets/images/how-we-works-small.jpg"
              alt="How We Works Small Image"
              width={300}
              height={300}
              className={styles.smallImage}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.rightItem}>
              <Image
                src="/assets/icons/warehousing-services-icon.svg"
                alt="Warehousing Service Icon"
                width={50}
                height={50}
              />
              <div>
                <h3>Warehousing Services</h3>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking
                </p>
              </div>
            </div>
            <div className={styles.rightItem}>
              <Image
                src="/assets/icons/safety-quality-icon.svg"
                alt="Safety Quality Icon"
                width={50}
                height={50}
              />
              <div>
                <h3>Safety & Quality</h3>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking
                </p>
              </div>
            </div>
            <div className={styles.rightItem}>
              <Image
                src="/assets/icons/care-for-environment-icon.svg"
                alt="Care For Environment Icon"
                width={50}
                height={50}
              />
              <div>
                <h3>Care for Environment</h3>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWorks;
