import styles from "../styles/Partners.module.css";
import Image from "next/image";

const partnersArray = [
  "ottowa-hospital.png",
  "uOttowa.png",
  "Metafinity-partner.png",
  "senators.png",
  "CAA.png",
  "ontario-government.png",
];

function Partners() {
  const heights = [200, 363, 75, 75, 75, 75];
  const widths = [363, 363, 363, 363, 363, 363];
  return (
    <div id="partners" className={styles.container}>
      {partnersArray.map((partner, index) => {
        return (
          <ImageList
            key={index + partner}
            src={partner}
            alt={index + partner}
            width={widths[index]}
            height={heights[index]}
          />
        );
      })}
    </div>
  );
}

function ImageList({ src, alt, width, height }) {
  return (
    <>
      <div>
        <Image
          src={`/images/${src}`}
          alt={`${alt}`}
          width={width}
          height={height}
          objectFit="contain"
        />
      </div>
    </>
  );
}

export default Partners;
