import React from "react";

import Image from "next/image";
import styles from "./style.module.css";
import { GoLinkExternal } from "react-icons/go";

function RelatedProjects() {
  return (
    <section id="#related-projects" className={styles.section}>
      <div className="container">
        <h3 className={styles.title}>Related Projects</h3>
        <div className="container">
          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
              <Image
                src="/assets/gallery/gallery-image-1.jpg"
                alt="Gallery Image 1"
                fill
              />
              <div className={styles.itemHover}>
                <GoLinkExternal />
              </div>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/assets/gallery/gallery-image-2.jpg"
                alt="Gallery Image 2"
                fill
              />
              <div className={styles.itemHover}>
                <GoLinkExternal />
              </div>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/assets/gallery/gallery-image-3.jpg"
                alt="Gallery Image 3"
                fill
              />
              <div className={styles.itemHover}>
                <GoLinkExternal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedProjects;
