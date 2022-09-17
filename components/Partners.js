import styles from "../styles/Partners.module.css";
import Image from "next/image";

const partnersArray = [
  "placeholder-logo",
  "placeholder-logo",
  "placeholder-logo",
  "placeholder-logo",
  "placeholder-logo",
  "placeholder-logo",
];

function Partners() {
  return (
    <div data-aos="fade-up" id="partners" className={styles.container}>
      <ul>
        {partnersArray.map((partner) => {
          return (
            <ImageList
              key={partner}
              src={partner}
              alt={partner}
              width={363}
              height={75}
            />
          );
        })}
      </ul>
    </div>
  );
}

function ImageList({ src, alt }) {
  return (
    <>
      <li>
        <Image
          src={`/images/${src}.png`}
          alt={`${alt}`}
          width={363}
          height={75}
        />
      </li>
    </>
  );
}

export default Partners;
