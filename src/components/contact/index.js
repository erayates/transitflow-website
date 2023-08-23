import React from "react";
import ContactForm from "./contact-form";
import styles from "./style.module.css";
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import Image from "next/image";

function Contact() {
  return (
    <section id="#contact" className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.subtitle}>Contact</p>
            <h2 className={styles.title}>Get in touch with us</h2>
            <p className={styles.description}>
              Leverage agile frameworks to provide a robust synopsis for
              strategy faster collaborative thinking to further the overall
              value.
            </p>
            <div>
              <AiOutlineMail className={styles.icon} />
              <div>
                <p>Email</p>
                <span>contact@logistics.com</span>
              </div>
            </div>
            <div>
              <AiOutlinePhone className={styles.icon} />
              <div>
                <p>Call Us</p>
                <span>{"(00) 112 365 489"}</span>
              </div>
            </div>
            <div>
              <AiOutlineClockCircle className={styles.icon} />
              <div>
                <p>Mon - Sat 9.00 - 18.00</p>
                <span>Sunday Closed</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className={styles.images}>
          <Image
            src="/assets/images/studio-green.jpg"
            alt="studio-green"
            width={300}
            height={200}
          />
          <Image
            src="/assets/images/norto.jpg"
            alt="norto"
            width={300}
            height={200}
          />
          <Image
            src="/assets/images/points-one.jpg"
            alt="points-one"
            width={300}
            height={200}
          />
          <Image
            src="/assets/images/out-of-the-sandbox.jpg"
            alt="out-of-the-sandbox"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
