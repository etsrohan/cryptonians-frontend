import styles from "../styles/Influencers.module.css";
import Image from "next/image";

function Influencers() {
  const imageArray = [
    "/images/Cryptonians.png",
    "/images/uncovered-crypto.jpg",
    "/images/mavii.png",
    "/images/Cryptonians.png",
  ];
  const linkArray = [
    "https://www.instagram.com/thecryptoniansofficial/",
    "https://www.instagram.com/uncoveredcrypto/",
    "https://www.instagram.com/mavii505/",
    "https://www.instagram.com/thecryptoniansofficial/",
  ];
  return (
    <div id="influencers" className={styles.container}>
      <h1>Meet our Influencers</h1>
      <div>
        <figure className={styles.images}>
          {imageArray.map((image, index) => {
            return (
              <a
                href={linkArray[index]}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Image
                  src={image}
                  key={index}
                  alt={index}
                  width={500}
                  height={500}
                  layout="intrinsic"
                />
              </a>
            );
          })}
        </figure>
      </div>
    </div>
  );
}

export default Influencers;
