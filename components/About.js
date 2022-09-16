import styles from "../styles/About.module.css";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const title = "About Neptune";
const body =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 50 });
  }, []);
  return (
    <div id="about">
      <div data-aos="fade-left" className={styles.card}>
        <div className={styles.column}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className={styles.column}>
          <Image
            src={"/images/aboutus-2.jpg"}
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