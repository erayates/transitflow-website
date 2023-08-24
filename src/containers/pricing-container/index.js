import Banner from "@/components/banner";
import React from "react";

import styles from "./style.module.css";
import PricingTable from "@/components/pricing-table";
import Testimonial from "@/components/testimonial";

function PricingContainer() {
  return (
    <main>
      <Banner
        title="Our Best Price"
        subtitle="Pricing"
        image="pricing-banner.jpg"
      />
      <PricingTable />
      <div className={styles.testimonial}>
        <Testimonial />
      </div>
    </main>
  );
}

export default PricingContainer;
