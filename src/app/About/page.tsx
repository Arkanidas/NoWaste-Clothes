import styles from "../About/page.module.css";

export default function About() {
  return (
    <>
       <h3 className={styles.header}>Om oss</h3>
       <img className={styles.image} src="/about.png" alt="About Us" />
      <p className={styles.description}>
        Idel Förening grundades år 2019 med ett tydligt syfte: att hjälpa människor i nöd runt om i världen.
        Sedan starten har vi engagerat oss i att samla in och donera kläder, hushållsartiklar och andra förnödenheter till utsatta områden,
        särskilt där krig, fattigdom och humanitära kriser har skapat stora behov.
        <br></br>
        Vi arbetar
      </p>
    </>
  );
}
