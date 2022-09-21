import styles from "../styles/Partners.module.css";
import Image from "next/image";

const partnersArray = [
  "placeholder-logo.png",
  "placeholder-logo.png",
  "placeholder-logo.png",
  "placeholder-logo2.png",
  "placeholder-logo2.png",
  "placeholder-logo2.png",
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
          src={`/images/${src}`}
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
