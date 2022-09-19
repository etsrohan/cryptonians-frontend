import styles from "../styles/Partners.module.css";
import Image from "next/image";

const partnersArray = [
  "placeholder-logo",
  "placeholder-logo",
  "placeholder-logo",
  "placeholder-logo2",
  "placeholder-logo2",
  "placeholder-logo2",
];

function Partners() {
  return (
    <div id="partners" className={styles.container}>
      {partnersArray.map((partner) => {
        return <ImageList key={partner} src={partner} alt={partner} />;
      })}
    </div>
  );
}

function ImageList({ src, alt }) {
  return (
    <>
      <div>
        <Image
          src={`/images/${src}.png`}
          alt={`${alt}`}
          width={363}
          height={75}
          objectFit="contain"
        />
      </div>
    </>
  );
}

export default Partners;
