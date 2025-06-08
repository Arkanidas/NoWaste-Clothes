import styles from "../components/footer.module.css";


   

export default function Footer() {

  return (

    <>
     
   <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" />
          </a>
        </div>
        <div className={styles.footerText}>
          <p>&copy; {new Date().getFullYear()} Nowaste. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
       
    
  
    </>
  );
}