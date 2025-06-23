import styles from "../About/page.module.css";

export default function About() {
  return (
    <>
       <h3 className={styles.header}>Om oss</h3>
       <img className={styles.image} src="/about.png" alt="About Us" />
      <p className={styles.description}>
        Teamet bakom Nowaste består av passionerade individer som brinner för hållbarhet och att hjälpa andra. 
        Vi har arbetat med detta projekt sedan början av 2020 och har som mål att göra det enkelt för människor att donera sina begagnade kläder, möbler och andra föremål till behövande. 
        Genom vårt initiativ strävar vi efter att minska avfall och samtidigt hjälpa samhällen i Afrika och Ukraina att få tillgång till resurser de annars saknar.
      </p>
    </>
  );
}
