import styles from "../About/page.module.css";

export default function About() {
  return (
    <>
       <h3 className={styles.header}>Om oss</h3>
       <img className={styles.image} src="/about.png" alt="About Us" />
      <p className={styles.description}>
        Idel Förening grundades 2019 aha idell 
      </p>
    </>
  );
}
