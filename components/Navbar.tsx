import Link from "next/link";
import Image from "next/image";
import styles from "../components/navbar.module.css";
import logo from '../public/nowaste logo.png'

   

export default function Navbar() {

  return (

    <>
      <Image src={logo} alt="No Waste Logo" width={130} height={130} className={styles.logo} />
    <div className={styles.Navigation}>
       
      <ul className={styles.navlist}>
        
        <li className={styles.links}><Link href="/">Home</Link></li>
        <li className={styles.links}><Link href="/About">About us</Link></li>
        <li className={styles.links}><Link href="/Contact">Contact</Link></li>
      </ul>
    </div>
    </>
  );
}