import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

import { FaFacebook } from "react-icons/fa";

function Team() {
  return (
    <section id="#expert-team" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.subtitle}>The Transporters</p>
          <h2 className={styles.title}>Meet Expert Team</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/assets/images/people/team-1.jpg"
                alt="Team Member 1"
                fill
                objectFit="cover"
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardInfo}>
                <p>Jessca Arow</p>
                <span>Designer</span>
              </div>
              <div className={styles.cardSocial}>
                <AiOutlineTwitter />
                <FaFacebook />
                <AiOutlineInstagram />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/assets/images/people/team-2.jpg"
                alt="Team Member 2"
                fill
                objectFit="cover"
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardInfo}>
                <p>Kathleen Smith</p>
                <span>Designer</span>
              </div>
              <div className={styles.cardSocial}>
                <AiOutlineTwitter />
                <FaFacebook />
                <AiOutlineInstagram />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/assets/images/people/team-3.jpg"
                alt="Team Member 3"
                fill
                objectFit="cover"
              />
            </div>

            <div className={styles.cardContent}>
              <div className={styles.cardInfo}>
                <p>Rebecca Taylor</p>
                <span>Designer</span>
              </div>
              <div className={styles.cardSocial}>
                <AiOutlineTwitter />
                <FaFacebook />
                <AiOutlineInstagram />
              </div>
            </div>
          </div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
    </section>
  );
}

export default Team;
