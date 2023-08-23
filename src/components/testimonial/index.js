"use client";

import React, { useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";

function Testimonial() {

  const testimonialContent = useRef(null)

  const handleSlidePrev = () => {
    testimonialContent.current.scrollLeft -= 512;
  };

  const handleSlideNext = () => {
    testimonialContent.current.scrollLeft += 512;
  };

  return (
    <section id="#testimonial">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.subtitle}>Testimonial</p>
          <div>
            <h2 className={styles.title}>What Our Customer Say</h2>
            <div>
              <button className={styles.prevButton} onClick={handleSlidePrev}>
                <AiOutlineSwapLeft />
              </button>
              <button className={styles.nextButton} onClick={handleSlideNext}>
                <AiOutlineSwapRight />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.content} ref={testimonialContent}>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.customerInfo}>
                <Image
                  src="/assets/images/people/kathleen-smith.png"
                  alt="Kathleen Smith"
                  width={70}
                  height={70}
                />
                <div>
                  <p>Kathleen Smith</p>
                  <span>Fuel Company</span>
                </div>
              </div>
              <Image
                src="/assets/icons/quotes.svg"
                alt="Quotes Icon"
                width={60}
                height={60}
              />
            </div>
            <div className={styles.itemContent}>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
            <Image
              src="/assets/icons/stars.svg"
              alt="Starts Icon"
              width={150}
              height={30}
            />
          </div>

          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.customerInfo}>
                <Image
                  src="/assets/images/people/john-martin.png"
                  alt="John Martin"
                  width={70}
                  height={70}
                  className={styles.customerPhoto}
                />
                <div>
                  <p>John Martin</p>
                  <span>Restoration Company</span>
                </div>
              </div>
              <Image
                src="/assets/icons/quotes.svg"
                alt="Quotes Icon"
                width={50}
                height={50}
              />
            </div>
            <div className={styles.itemContent}>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
            <Image
              src="/assets/icons/stars.svg"
              alt="Starts Icon"
              width={150}
              height={30}
            />
          </div>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <div className={styles.customerInfo}>
                <Image
                  src="/assets/images/people/kathleen-smith.png"
                  alt="Kathleen Smith"
                  width={70}
                  height={70}
                  className={styles.customerPhoto}
                />
                <div>
                  <p>Kathleen Smith</p>
                  <span>Fuel Company</span>
                </div>
              </div>
              <Image
                src="/assets/icons/quotes.svg"
                alt="Quotes Icon"
                width={50}
                height={50}
              />
            </div>
            <div className={styles.itemContent}>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
            <Image
              src="/assets/icons/stars.svg"
              alt="Starts Icon"
              width={150}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
