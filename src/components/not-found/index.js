import Link from "next/link";
import React from "react";

import styles from "./style.module.css";

function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.error}>
          <p>4</p>
          <p>0</p>
          <p>4</p>
        </div>
        <p>Oops! Page not found.</p>
        <span>Let's get you to where you need to be.</span>
        <Link href="/">Back to home</Link>
      </div>
    </main>
  );
}

export default NotFound;
