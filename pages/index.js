import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {
  const word = useRef("");
  useEffect(() => {
    const typed = new Typed(word.current, {
      strings: ["HERE", "SUCCESS", "NEPTUNE"],
      fadeOut: false,
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: false,
      loop: true,
      showCursor: false,
      startDelay: 100,
      backDelay: 1000,
    });
  });
  return (
    <>
      <div className={styles.card}>
        <h2>
          We Are <br />
          <span ref={word} />
        </h2>
      </div>
    </>
  );
}
