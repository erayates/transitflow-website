import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

function WhyUs() {
  return (
    <section id="#why-us" className={styles.section}>
      <div className={styles.banner}>
        <Image
          src="/assets/images/why-us-banner.jpg"
          alt="Why Us Banner"
          fill
          objectFit="cover"
        />
        <div className={styles.bannerGradient} />
      </div>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <p className={styles.subtitle}>Why Us</p>
          <h2 className={styles.title}>
            We provide full range global logistics solution
          </h2>
          <p className={styles.description}>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <p className={styles.description}>
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <Image
                src="/assets/icons/delivery-on-time.svg"
                alt="Delivery On Time Icon"
                width={50}
                height={50}
              />
              <p>Delivery On Time</p>
            </div>
            <div className={styles.feature}>
              <Image
                src="/assets/icons/travel-cost.svg"
                alt="Optimized Travel Cost Icon"
                width={50}
                height={50}
              />
              <p>Optimized Travel Cost</p>
            </div>
          </div>
        </div>
        <div className={styles.containerRight}>
          <Image
            src="/assets/images/why-us-image.jpg"
            alt="Why Us Image"
            fill
            objectFit="cover"
            objectPosition="center"
          />
          <Image
            src="/assets/images/why-us-image-small.jpg"
            alt="Why Us Image Small"
            width={320}
            height={250}
            objectFit="cover"
            className={styles.imageSmall}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div>
            <p>1294</p>
            <div className={styles.square} />
            <span>Delivered Packages</span>
          </div>
          <div className={styles.divider}></div>
          <div>
            <p>1294</p>
            <div className={styles.square} />
            <span>Delivered Packages</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
