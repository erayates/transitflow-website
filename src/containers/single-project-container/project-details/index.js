import Image from "next/image";
import React from "react";

import styles from "./style.module.css";

function ProjectDetails() {
  return (
    <section id="#project-details" className={styles.section}>
      <div className="container">
        <div className={styles.left}>
          <Image
            src="/assets/images/project-details.jpg"
            alt="Project Details Image"
            fill
            objectFit="cover"
          />
        </div>
        <div className={styles.right}>
          <h3>Project Details</h3>
          <div>
            <p>Customer :</p>
            <span>David Warner</span>
          </div>
          <div>
            <p>Category :</p>
            <span>Warehouse Transportation</span>
          </div>
          <div>
            <p>Date :</p>
            <span>12 December, 2022</span>
          </div>
          <div>
            <p>Status :</p>
            <span>Completed</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
