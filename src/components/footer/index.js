import React from "react";
import styles from "./style.module.css";
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";
import Button from "../button";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerUpper}>
        <div className="container">
          <div>
            <Image
              src="/assets/images/logo.png"
              alt="Transitflow Logo"
              width={145}
              height={26}
            />
          </div>
          <div>Pages</div>
          <div>Utility</div>
          <div>Subscribe</div>
        </div>
      </div>
      <div className={styles.footerMid}>
        <div className="container">
          <div>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>
            <div>
              <AiOutlineMail className={styles.icon} />
              <div>
                <p>Email</p>
                <p>contact@logistics.com</p>
              </div>
            </div>
            <div>
              <AiOutlinePhone className={styles.icon} />
              <div>
                <p>Call Us</p>
                <p>{"(00) 112 365 489"}</p>
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Our Team</Link>
              </li>
              <li>
                <Link href="/">Our Project</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/">Style Guide</Link>
              </li>
              <li>
                <Link href="/">Changelog</Link>
              </li>
              <li>
                <Link href="/">Licenses</Link>
              </li>
              <li>
                <Link href="/">Protected</Link>
              </li>
              <li>
                <Link href="/">Not Found</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerMidLastChild}>
            <input type="email" placeholder="Email here*" />
            <div>
              <button type="submit">Send Now</button>

              <div>
                <AiFillLinkedin />
                <AiOutlineTwitter />
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>
            Copyright © TransitFlow | Designed by VictorFlow - Powered by
            Webflow - Coded by Eray Ates.
          </p>
          <div>
            <ul>
              <li>
                <Link href="/">Style Guide</Link>
              </li>
              <li>
                <Link href="/">Changelog</Link>
              </li>
              <li>
                <Link href="/">Licenses</Link>
              </li>
              <li>
                <Link href="/">Password</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
