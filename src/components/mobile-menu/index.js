"use client";
import Link from "next/link";
import React from "react";
import styles from "./style.module.css";
import { AiFillCloseSquare } from "react-icons/ai";

function SubMenu() {
  return (
    <div>
      <ul>
        <li>asd</li>
      </ul>
    </div>
  );
}

function MobileMenu({ setOpenMobileMenu }) {
  const [openSubMenu, setOpenSubMenu] = React.useState(false);

  return (
    <div className={styles.menu}>
      <nav>
        <div className={styles.close} onClick={() => setOpenMobileMenu(false)}>
          <AiFillCloseSquare />
        </div>
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
          <li>
            <Link
              href=""
              className={styles.navigationItem}
              onClick={() => setOpenSubMenu((prev) => !prev)}
            >
              Pages
            </Link>
            {openSubMenu && <SubMenu />}
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
    </div>
  );
}

export default MobileMenu;
