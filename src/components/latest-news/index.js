import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import Button from "../button";

function LatestNews() {
  return (
    <section id="#latest-news" className={styles.section}>
      <div className={`${styles.blog} container`}>
        <div className={styles.header}>
          <p className={styles.subtitle}>Our Blog</p>
          <h2 className={styles.title}>Our Latest News</h2>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.posts}>
          <div className={styles.post}>
            <div className={styles.postImage}>
              <Image
                src="/assets/images/posts/post-1.jpg"
                alt="Blog Post 1 Image"
                objectFit="cover"
                fill
              />
              <Link href="/">
                <div className={styles.imageHover}>
                  <p>Read More</p>
                  <BiLinkExternal />
                </div>
              </Link>
            </div>
            <div className={styles.postDate}>
              <Image
                src="/assets/icons/calendar.svg"
                alt="Calendar Icon"
                width={50}
                height={50}
              />
              <p>08</p>
              <span>September</span>
            </div>
            <div className={styles.postContent}>
              <h3>Inland freight a worthy solution for your business</h3>
              <p>
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.
              </p>
              <ul>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staff</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staff</li>
              </ul>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.post}>
            <div className={styles.postImage}>
              <Image
                src="/assets/images/posts/post-2.jpg"
                alt="Blog Post 1 Image"
                objectFit="cover"
                fill
              />
              <Link href="/">
                <div className={styles.imageHover}>
                  <p>Read More</p>
                  <BiLinkExternal />
                </div>
              </Link>
            </div>
            <div className={styles.postDate}>
              <Image
                src="/assets/icons/calendar.svg"
                alt="Calendar Icon"
                width={50}
                height={50}
              />
              <p>08</p>
              <span>September</span>
            </div>
            <div className={styles.postContent}>
              <h3>How technology can help redraw the supply chain map</h3>
              <p>
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.
              </p>
              <ul>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staff</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staff</li>
              </ul>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.post}>
            <div className={styles.postImage}>
              <Image
                src="/assets/images/posts/post-3.jpg"
                alt="Blog Post 1 Image"
                objectFit="cover"
                fill
              />
              <Link href="/">
                <div className={styles.imageHover}>
                  <p>Read More</p>
                  <BiLinkExternal />
                </div>
              </Link>
            </div>
            <div className={styles.postDate}>
              <Image
                src="/assets/icons/calendar.svg"
                alt="Calendar Icon"
                width={50}
                height={50}
              />
              <p>08</p>
              <span>September</span>
            </div>
            <div className={styles.postContent}>
              <h3>Five things you should have ready for your broker</h3>
              <p>
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.
              </p>
              <ul>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staff</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staff</li>
              </ul>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.button}>
            <Button color="dark">More Blog</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
