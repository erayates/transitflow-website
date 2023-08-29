import React from "react";
import styles from "./style.module.css";

import Link from "next/link";

function SingleBlogAside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.categories}>
        <h4>Categories</h4>
        <ul>
          <Link href="/">
            <li>
              <p>Shipping</p>
              <span>{"(3)"}</span>
            </li>
          </Link>
          <Link href="/">
            <li>
              <p>Services</p>
              <span>{"(5)"}</span>
            </li>
          </Link>
          <Link href="/">
            <li>
              <p>Transport</p>
              <span>{"(3)"}</span>
            </li>
          </Link>
          <Link href="/">
            <li>
              <p>Warehouse</p>
              <span>{"(3)"}</span>
            </li>
          </Link>
          <Link href="/">
            <li>
              <p>Transport Industries</p>
              <span>{"(3)"}</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className={styles.help}>
        <h4>How Can Help You?</h4>
        <p>
          Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
          lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat
          tempus Phasellus atquam.
        </p>

        <button>Contact</button>
      </div>

      <div className={styles.contact}>
        <h4>Get In Touch</h4>
        <div>
          <p>Need Help?</p>
          <p>{"(00) 112 365 489"}</p>
        </div>
        <div className={styles.divider}></div>
        <div>
          <p>Email</p>
          <p>contact@logistics.com</p>
        </div>
      </div>
    </aside>
  );
}

export default SingleBlogAside;
