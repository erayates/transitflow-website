import Banner from "@/components/banner";
import OurLogisticsServices from "@/components/our-logistics-services";
import React from "react";

import styles from "./style.module.css";
import Testimonial from "@/components/testimonial";
import HowWeWorks from "./how-we-works";
import CompanyNumbers from "@/components/company-numbers";

function ServicesContainer() {
  return (
    <main>
      <Banner
        title="Our Logistics Service"
        subtitle="Services"
        image="services-banner.jpg"
      />
      <OurLogisticsServices />
      <HowWeWorks />
      <div className={styles.testimonial}>
        <Testimonial />
      </div>
      <CompanyNumbers />
    </main>
  );
}

export default ServicesContainer;
