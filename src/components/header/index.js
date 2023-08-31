import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

import { FaFacebook } from "react-icons/fa";

import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.container}>
          <Image
            src="/assets/images/logo.png"
            alt="site-logo"
            width={180}
            height={30}
          />
          <div className={styles.headerInfo}>
            <div className={styles.headerInfoItem}>
              <AiOutlineClockCircle className={styles.headerInfoIcon} />
              <div>
                <p>Mon - Sat: 9.00 - 18.00</p>
                <p>Sunday Closed</p>
              </div>
            </div>
            <div className={styles.headerInfoItem}>
              <AiOutlineMail className={styles.headerInfoIcon} />
              <div>
                <p>Email</p>
                <p>contact@logistics.com</p>
              </div>
            </div>
            <div className={styles.headerInfoItem}>
              <AiOutlinePhone className={styles.headerInfoIcon} />
              <div>
                <p>Call Us</p>
                <p>{"(00) 112 365 489"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.container}>
          <nav>
            <ul className={styles.navigation}>
              <Link href="/" className={styles.navigationItem}>
                Home
              </Link>
              <Link href="/about-us" className={styles.navigationItem}>
                About
              </Link>
              <Link href="" className={styles.navigationItem}>
                Pages
              </Link>
              <Link href="/projects" className={styles.navigationItem}>
                Project
              </Link>
              <Link href="/contact-us" className={styles.navigationItem}>
                Contact
              </Link>
            </ul>
          </nav>
          <div className={styles.headerBottomRight}>
            <div className={styles.socialMedia}>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                className={styles.socialMediaIcon}
              >
                <AiOutlineInstagram />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className={styles.socialMediaIcon}
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.twiiter.com"
                target="_blank"
                className={styles.socialMediaIcon}
              >
                <AiOutlineTwitter />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                className={styles.socialMediaIcon}
              >
                <AiFillLinkedin />
              </Link>
            </div>
            <button className={styles.button}>Request Quote</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
