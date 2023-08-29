import React from "react";
import BlogBanner from "./banner";
import SingleBlogContent from "./single-blog-content";
import SingleBlogAside from "./single-blog-aside";

import styles from "./style.module.css";

function SingleBlogContainer() {
  return (
    <main>
      <BlogBanner
        title="How technology can help redraw the supply chain map"
        date="12 March"
        image="single-blog-banner.jpg"
      />
      <div className={styles.content}>
        <SingleBlogContent />
        <SingleBlogAside />
      </div>
    </main>
  );
}

export default SingleBlogContainer;
