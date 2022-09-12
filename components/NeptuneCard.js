import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NeptuneCard.module.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function NeptuneCard() {
  const word = useRef("");
  const dimension = 80;
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
                <a target="_blank">
                  <Image
                    src={`/images/instagram.png`}
                    alt={`instagram`}
                    height={dimension}
                    width={dimension}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://t.me/+sLt8uJfcYulhZjQx">
                <a target="_blank">
                  <Image
                    src={`/images/telegram.png`}
                    alt={`telegram`}
                    height={dimension}
                    width={dimension}
                  />
                </a>
              </Link>
            </li>
          </ul>
          <ul className={styles.social}>
            <li>
              <Link href={`/`}>
                <a target="_blank">
                  <Image
                    src={`/images/twitter.png`}
                    alt={`twitter`}
                    height={dimension}
                    width={dimension}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/c/TheCryptonians_">
                <a target="_blank">
                  <Image
                    src={`/images/youtube.png`}
                    alt={`youtube`}
                    height={dimension}
                    width={dimension}
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