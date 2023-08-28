import React from "react";

import { BsArrowRight } from "react-icons/bs";

import styles from "./style.module.css";

function WharehouseTransportation() {
  return (
    <section id="#wharehouse-transportation" className={styles.section}>
      <div className="container">
        <h3 className={styles.title}>Wharehouse Transportation</h3>
        <p className={styles.description}>
          Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
          lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat
          tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc.
          Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
          quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed,
          faucibus vel elit Integer adipiscing erat eget risus sollicitudin
          pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan
          ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
          posuere.
        </p>

        <ul>
          <li>
            <BsArrowRight />
            National Customer Service Center - 24 hours a day.
          </li>
          <li>
            <BsArrowRight />
            Online shipping navigator lets you quoute, book and track shipments.
          </li>
          <li>
            <BsArrowRight />
            Your Logistics Needs Are At The Heart Of Our Business
          </li>
          <li>
            <BsArrowRight />
            Very careful handling of valuable goods
          </li>
          <li>
            <BsArrowRight />
            Time saving and convenient transportation services in your area
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WharehouseTransportation;
