import Banner from "@/components/banner";
import React from "react";
import ProjectDetails from "./project-details";
import WharehouseTransportation from "./wharehouse-transportation";
import OurProjectTransportation from "./our-project-transportation";
import RelatedProjects from "./related-projects";

function SingleProductContainer() {
  return (
    <main>
      <Banner
        title="Air Cargo Transportation"
        subtitle="Warehouse Transportation"
        image="project-single-banner.jpg"
      />

      <ProjectDetails />
      <WharehouseTransportation />
      <OurProjectTransportation />
      <RelatedProjects />
    </main>
  );
}

export default SingleProductContainer;
