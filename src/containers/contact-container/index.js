import Banner from "@/components/banner";
import Contact from "@/components/contact";
import React from "react";

function ContactContainer() {
  return (
    <main>
      <Banner
        title="Contact Us"
        subtitle="Contact"
        image="contact-us-banner.jpg"
      />
      <Contact />
    </main>
  );
}

export default ContactContainer;
