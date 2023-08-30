import Banner from "@/components/banner";
import CompanyNumbers from "@/components/company-numbers";
import Contact from "@/components/contact";
import Team from "@/components/team";
import React from "react";

function TeamContainer() {
  return (
    <main>
      <Banner title="Our Team" subtitle="Team" image="team-banner.jpg" />
      <Team />
      <Contact />
      <CompanyNumbers />
    </main>
  );
}

export default TeamContainer;
