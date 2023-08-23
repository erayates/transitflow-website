import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

function WhyChoose() {
  return (
    <section id="#why-choose" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <Image
            src="/assets/images/why-choose-plane.jpg"
            alt="Why Choose Plane"
            fill
            objectFit="cover"
          />
          <div className={styles.imageContent}>
            <Image
              src="/assets/icons/across-borders.svg"
              alt="Content Image Icon"
              width={55}
              height={55}
            />
            <p>Moving your products across borders</p>
          </div>
        </div>
        <div className={styles.contentRight}>
          <p className={styles.sectionTitle}>Why Choose</p>
          <h2 className={styles.title}>
            We create opportunity to reach potential
          </h2>
          <p className={styles.subtitle}>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>

          <div className={styles.features}>
            <div className={styles.featureCol}>
              <div className={styles.feature}>
                <Image
                  src="/assets/icons/safe-package.svg"
                  alt="Safe Package Icon"
                  width={50}
                  height={50}
                />
                <p>Safe Package</p>
              </div>
              <div className={styles.feature}>
                <Image
                  src="/assets/icons/global-tracking.svg"
                  alt="Global Tracking"
                  width={50}
                  height={50}
                />
                <p>Global Tracking</p>
              </div>
              <div className={styles.feature}>
                <Image
                  src="/assets/icons/in-time-delivery.svg"
                  alt="Time Delivery"
                  width={50}
                  height={50}
                />
                <p>In Time Delivery</p>
              </div>
            </div>
            <div className={styles.featureCol}>
              <div className={styles.feature}>
                <Image
                  src="/assets/icons/ship-everywhere.svg"
                  alt="Ship Everywhere Icon"
                  width={50}
                  height={50}
                />
                <p>Ship Everywhere</p>
              </div>
              <div className={styles.feature}>
                <Image
                  src="/assets/icons/24-7-support.svg"
                  alt="24/7 Support Icon"
                  width={50}
                  height={50}
                />
                <p>24/7 Support</p>
              </div>
              <div className={styles.feature}>
                <Image
                  src="/assets/icons/transparant-pricing.svg"
                  alt="Transparant Pricing"
                  width={50}
                  height={50}
                />
                <p>Transparant Pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
