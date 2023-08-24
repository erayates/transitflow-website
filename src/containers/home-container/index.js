import Hero from "@/containers/home-container/hero";
import React from "react";
import styles from "./style.module.css";
import WhatWeDo from "./what-we-do";
import WhyUs from "./why-us";
import Services from "./services";
import Testimonial from "@/components/testimonial";
import WhyChoose from "./why-choose";
import Team from "@/components/team";
import Contact from "@/components/contact";
import LatestNews from "@/components/latest-news";
import FooterPhoto from "./footer-photo";

function HomeContainer() {
  return (
    <main className={styles.home}>
      <Hero />
      <WhatWeDo />
      <WhyUs />
      <Services />
      <Testimonial />
      <WhyChoose />
      <Team />
      <Contact />
      <LatestNews />
      <FooterPhoto />
    </main>
  );
}

export default HomeContainer;
