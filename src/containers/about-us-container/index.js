import Banner from "@/components/banner";
import React from "react";

import OurCompanyReview from "./our-company-review";
import WhatWeDo from "./what-we-do";
import Team from "@/components/team";
import Testimonial from "@/components/testimonial";
import PricingTable from "@/components/pricing-table";
import FAQ from "@/components/faq";

import styles from "./style.module.css";

function AboutContainer() {
  return (
    <main>
      <Banner
        title="About Our Logistics"
        subtitle="About Us"
        image="about-us-banner.jpg"
      />

      <OurCompanyReview />
      <WhatWeDo />

      <Team />
      <div className={styles.testimonialDiv}>
        <Testimonial />
      </div>
      <PricingTable />
      <FAQ />
    </main>
  );
}

export default AboutContainer;
