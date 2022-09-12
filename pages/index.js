import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Link from "next/link";

const social = ["instagram", "telegram", "twitter", "youtube"];

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
        <div className={styles.links}>
          <ul className={styles.social}>
            <li>
              <Link href="https://www.instagram.com/neptune.i.o/">
                <a>
                  <Image
                    src={`/images/instagram.png`}
                    alt={`instagram`}
                    height={80}
                    width={80}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/`}>
                <a>
                  <Image
                    src={`/images/telegram.png`}
                    alt={`telegram`}
                    height={80}
                    width={80}
                  />
                </a>
              </Link>
            </li>
          </ul>
          <ul className={styles.social}>
            <li>
              <Link href={`/`}>
                <a>
                  <Image
                    src={`/images/twitter.png`}
                    alt={`twitter`}
                    height={80}
                    width={80}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/c/TheCryptonians_">
                <a>
                  <Image
                    src={`/images/youtube.png`}
                    alt={`youtube`}
                    height={80}
                    width={80}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function SocialLink({ href, social }) {
  return (
    <li>
      <Link href={`/`}>
        <a>
          <Image
            src={`/images/${social}.png`}
            alt={`${social}`}
            height={64}
            width={64}
          />
        </a>
      </Link>
    </li>
  );
}
