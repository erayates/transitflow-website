import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

function FooterPhoto() {
  return (
    <div className={styles.footerPhoto}>
      <Image src="/assets/images/footer-photo.jpg" alt="Footer Photo" fill objectFit="cover"/>
    </div>
  );
}

export default FooterPhoto;
