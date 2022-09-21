import styles from "../styles/Influencers.module.css";
import Image from "next/image";

function Influencers() {
  const imageArray = [
    "/images/person1.jpg",
    "/images/person2.jpg",
    "/images/person3.jpg",
    "/images/person1.jpg",
  ];
  return (
    <div id="influencers" className={styles.container}>
      <h1>Meet our Influencers</h1>
      <div>
        <figure className={styles.images}>
          {imageArray.map((image, index) => {
            return (
              <Image
                src={image}
                key={index}
                alt={index}
                width={500}
                height={400}
                layout="intrinsic"
              />
            );
          })}
        </figure>
      </div>
    </div>
  );
}

export default Influencers;
