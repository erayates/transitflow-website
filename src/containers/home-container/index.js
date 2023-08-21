import Hero from "@/containers/home-container/hero";
import React from "react";
import styles from "./style.module.css";
import WhatWeDo from "./what-we-do";
import WhyUs from "./why-us";

function HomeContainer() {
  return (
    <main className={styles.home}>
      <Hero />
      <WhatWeDo />
      <WhyUs />
    </main>
  );
}

export default HomeContainer;
