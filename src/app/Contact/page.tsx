import styles from "../Contact/contact.module.css";

export default function Contact() {
  return (
    <>
   <h3 className={styles.header}>Kontakta oss</h3>
<p className={styles.description}>Är du sugen på att donera kläder till behövande barn i Africa och Ukraina? Vad kul!</p>
<p className={styles.description}>Kontakta oss här nedan på antigen telefon eller mejl så arrangerar vi en tid och plats för när du kan donera dina ägodelar</p>

<div className={styles.contactContainer}>

  <div className={styles.contactItem}>
  <img src="/phone.png" alt="Donate at your Doorstep" />
  <h4 className={styles.contactheader}>Prata med oss</h4>
   <p className={styles.contactInfo}>+46 73 123 45 67</p>
    </div>

    <div className={styles.contactItem}>
  <img src="/mail.png" alt="Donate at your Doorstep" />
    <h4 className={styles.contactheader}>Skriv till oss</h4>
     <p className={styles.contactInfo}>kontakt@nowaste.se</p>
    </div>
</div>
    </>
  );
}
