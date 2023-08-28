import Image from "next/image";
import React from "react";

import styles from "./style.module.css";
import { BsFillPlayFill } from "react-icons/bs";

function OurProjectTransportation() {
  return (
    <section id="#our-project-transportation" className={styles.section}>
      <div className="container">
        <h3 className={styles.title}>Our Project Transportation</h3>
        <p className={styles.description}>
          Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
          lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat
          tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc.
          Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
          quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed,
          faucibus vel elit Integer adipiscing erat eget risus sollicitudin
          pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan
          ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
          posuere.
        </p>

        <div className={styles.image}>
          <Image
            src="/assets/images/our-project-transportation.jpg"
            alt="Our Project Transportation Image"
            fill
            objectFit="cover"
          />
          <button>
            <BsFillPlayFill />
          </button>
          <div className={styles.darkBg}></div>
        </div>
      </div>
    </section>
  );
}

export default OurProjectTransportation;
