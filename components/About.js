import styles from "../styles/About.module.css";
import Image from "next/image";

const title = "About Neptune";
const body =
  "Helping brands with different aspects of their social media marketing strategy by deploying result-driven services   around social strategy, content production, community management, paid social advertising, influencer marketing, & more.";

function About() {
  return (
    <div id="about">
      <div className={styles.card}>
        <div data-aos="fade-right" className={styles.column}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div data-aos="fade-left" className={styles.column}>
          <Image
            src={"/images/strategy.jpg"}
            alt="aboutus-stock"
            width={688}
            height={450}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
