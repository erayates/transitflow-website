import React from "react";
import styles from "./style.module.css";

import Image from "next/image";
import Link from "next/link";

import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function SingleBlogContent() {
  return (
    <section id="#single-blog-content" className={styles.section}>
      <div>
        <h3 className={styles.title}>Your Logistics Solutions</h3>
        <p className={styles.description}>
          Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
          lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat
          tempus.Phasellus at quam hendrerit semper feugiat id nunc. Morbi quis
          justo velit. Duis semper lacus scelerisque, aliquam leo quis,
          porttitor leo Fusce lectus ex pretium[...]
        </p>
        <div>
          <p>{`"Digitization within transport and logistics means seamless service to our customers, visibility in the supply chain, and driving a more efficient business."`}</p>
        </div>
      </div>
      <div>
        <h3 className={styles.title}>
          Safest Logistics Solutions Provider With Integrity
        </h3>
        <p className={styles.description}>
          Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
          lobortis dapibus libero vel porttitor. Nulla tempor elit nec
          attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi
          quis justo velit. Duis semper lacus scelerisque, aliquam leo quis,
          porttitor leo Fusce lectus ex pretium[...]
        </p>
        <div className={styles.image}>
          <Image
            src="/assets/images/single-blog-image.jpg"
            alt="Single Blog Image"
            fill
            objectFit="cover"
          />
        </div>
        <p className={styles.description}>
          Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
          lobortis dapibus libero vel porttitor. Nulla tempor elit nec
          attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi
          quis justo velit. Duis semper lacus scelerisque, aliquam leo quis,
          porttitor leo Fusce lectus ex pretium.
        </p>
        <p className={styles.description}>
          Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
          lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat
          tempus Phasellus atquam.
        </p>
      </div>
      <div className={styles.contentFooter}>
        <div className={styles.socialLinks}>
          <Link href="/">
            <AiOutlineInstagram />
          </Link>
          <Link href="/">
            <FaFacebook />
          </Link>
          <Link href="/">
            <AiOutlineTwitter />
          </Link>
          <Link href="/">
            <AiFillLinkedin />
          </Link>
        </div>
        <div>
          <p>Category : Shipping</p>
        </div>
      </div>
    </section>
  );
}

export default SingleBlogContent;
