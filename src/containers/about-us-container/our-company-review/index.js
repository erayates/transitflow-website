import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import Button from "@/components/button";

function OurCompanyReview() {
  return (
    <section id="#our-company-review" className={styles.section}>
      <div className="container">
        <div className={styles.contentLeft}>
          <Image
            src="/assets/images/about-us-photo.jpg"
            alt="About Us Photo"
            fill
            objectFit="cover"
          />
          <Image
            src="/assets/images/about-us-photo-small.jpg"
            alt="About Us Photo Small"
            width={250}
            height={250}
            className={styles.smallPhoto}
          />
        </div>
        <div className={styles.contentRight}>
          <p className={styles.subtitle}>About Us</p>
          <h2 className={styles.title}>Our Company Review</h2>
          <p className={styles.description}>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>

          <div className={styles.buttons}>
            <button>Our Approach</button>
            <button>Our Approach</button>
            <button>Our Approach</button>
          </div>

          <p className={styles.description}>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
          </p>

          <Button color="dark">Learn More</Button>
        </div>
      </div>
    </section>
  );
}

export default OurCompanyReview;
