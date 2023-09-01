"use client";

import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

import { IoIosArrowDown } from "react-icons/io";

import { RxHamburgerMenu } from "react-icons/rx";

import { FaFacebook } from "react-icons/fa";

import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../mobile-menu";

function Header() {
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.container}>
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="site-logo"
                width={180}
                height={30}
              />
            </Link>
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
            <button
              type="button"
              className={styles.hamburger}
              onClick={() => setOpenMobileMenu(true)}
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <div className={styles.container}>
            <nav>
              <ul className={styles.navigation}>
                <li>
                  <Link href="/" className={styles.navigationItem}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/about-us" className={styles.navigationItem}>
                    About
                  </Link>
                </li>

                <li className={styles.subMenuParent}>
                  <Link href="#" className={styles.navigationItem}>
                    Pages
                    <IoIosArrowDown />
                  </Link>
                  <div className={styles.subMenu}>
                    <ul>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/team">Team</Link>
                      </li>
                      <li>
                        <Link href="/pricing">Pricing</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link href="/projects" className={styles.navigationItem}>
                    Project
                  </Link>
                </li>

                <li>
                  <Link href="/contact-us" className={styles.navigationItem}>
                    Contact
                  </Link>
                </li>
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
      {openMobileMenu && <MobileMenu setOpenMobileMenu={setOpenMobileMenu} />}
    </>
  );
}

export default Header;
