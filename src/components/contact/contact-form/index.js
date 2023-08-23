"use client";

import { leagueSpartan } from "@/app/layout";
import styles from "./style.module.css";

function ContactForm() {
  return (
    <form className={styles.form}>
      <div className={styles.inputRow}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name*"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email*"
          required
        />
      </div>
      <div className={`${styles.inputRow} ${leagueSpartan.className}`}>
        <input
          type="text"
          name="phone_number"
          id="phone_number"
          placeholder="Phone number*"
          required
        />
        <input type="text" name="city" id="city" placeholder="City*" required />
      </div>
      <textarea
        rows={8}
        cols={8}
        placeholder="Your Message"
        className={styles.textarea}
      />
      <button className={styles.button} type="submit">
        Submit Message
      </button>
    </form>
  );
}

export default ContactForm;
