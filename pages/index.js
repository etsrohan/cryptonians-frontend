import styles from "../styles/Home.module.css";
import NeptuneCard from "../components/NeptuneCard";
import About from "../components/About";
import Partners from "../components/Partners";
import Influencers from "../components/Influencers";
import Contact from "../components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 50 });
  }, []);
  return (
    <>
      <NeptuneCard />
      <About />
      <Partners />
      <Influencers />
      <Contact />
    </>
  );
}
