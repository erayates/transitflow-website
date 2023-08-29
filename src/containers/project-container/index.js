import React from "react";
import Image from "next/image";
import Banner from "@/components/banner";
import styles from "./style.module.css";
import { GoLinkExternal } from "react-icons/go";
import CompanyNumbers from "@/components/company-numbers";

function ProjectContainer() {
  return (
    <main>
      <Banner
        title="Our Project"
        subtitle="Gallery"
        image="project-banner.jpg"
      />
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
          <div className={styles.galleryItem}>
            <Image
              src="/assets/gallery/gallery-image-4.jpg"
              alt="Gallery Image 4"
              fill
            />
            <div className={styles.itemHover}>
              <GoLinkExternal />
            </div>
          </div>
          <div className={styles.galleryItem}>
            <Image
              src="/assets/gallery/gallery-image-5.jpg"
              alt="Gallery Image 5"
              fill
            />
            <div className={styles.itemHover}>
              <GoLinkExternal />
            </div>
          </div>
          <div className={styles.galleryItem}>
            <Image
              src="/assets/gallery/gallery-image-6.jpg"
              alt="Gallery Image 6"
              fill
            />
            <div className={styles.itemHover}>
              <GoLinkExternal />
            </div>
          </div>
        </div>
      </div>
      <CompanyNumbers />
    </main>
  );
}

export default ProjectContainer;
