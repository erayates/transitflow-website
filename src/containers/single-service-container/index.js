import Banner from "@/components/banner";
import React from "react";

import styles from "./style.module.css";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

function SingleServiceContainer() {
  return (
    <main>
      <Banner
        title="Service Details"
        subtitle="Service Single"
        image="single-service-banner.jpg"
      />
      <section id="content" className={styles.section}>
        <div className="container">
          <div className={styles.postContent}>
            <div className={styles.postImage}>
              <Image
                src="/assets/images/single-post.jpg"
                alt="Single Post Image"
                fill
                objectFit="cover"
              />
            </div>
            <div className={styles.postTexts}>
              <Image
                src="/assets/icons/sea-transport.svg"
                alt="Sea Transport Icon"
                width={50}
                height={50}
              />
              <h2 className={styles.postTitle}>Sea Transport Services</h2>
            </div>
            <p className={styles.postDescription}>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt, ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit, qui in ea
              voluptate velit esse, quam nihil molestiae consequatur, vel illum,
              qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
              et accusamus et iusto odio dignissimos ducimus, qui blanditiis
              praesentium voluptatum deleniti atque corrupti, quos dolores et
              quas molestias excepturi sint, obcaecati cupiditate non provident,
              similique sunt in culpa, qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.
            </p>
          </div>

          <div className={styles.postBenefit}>
            <div>
              <h3 className={styles.postTitle}>Benefit of Service</h3>
              <p className={styles.postDescription}>
                Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                santium doloremque laudantium, totam rem quae ab illo inventore
                veritatis.
              </p>
              <ul>
                <li>
                  <AiOutlineArrowRight /> Clearance and compliance service
                </li>
                <li>
                  <AiOutlineArrowRight /> Saving time to Deal with commodo
                  iaculis
                </li>
                <li>
                  <AiOutlineArrowRight /> Automate your business elis tristique
                </li>
                <li>
                  <AiOutlineArrowRight /> Saving time to deal with commodo
                  iaculis
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/assets/images/single-service-benefit-image.jpg"
                alt="Single Service Benefit Image"
                fill
                objectFit="cover"
              />
            </div>
          </div>

          <div className={styles.postHow}>
            <div>
              <Image
                src="/assets/images/single-service-how-image.jpg"
                alt="Single Service How Image"
                fill
                objectFit="cover"
              />
              <button>
                <BsFillPlayFill />
              </button>
            </div>
            <div>
              <h3 className={styles.postTitle}>How It Works</h3>
              <p className={styles.postDescription}>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia
                voluptas sit, doloremque laudantium. Sed ut perspiciatis, unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
                veritatis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SingleServiceContainer;
