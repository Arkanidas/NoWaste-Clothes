import Link from "next/link";
import Image from "next/image";
import styles from "../components /navbar.module.css";
import logo from '../public/nowaste logo.png'

  // <Image src={logo} alt="NoWaste Logo" className={styles.logo} width={10} height={10}/>

export default function Navbar() {
  return (
    <div className={styles.Navigation}>
      <ul className={styles.navlist}>
        
        <li className={styles.links}><Link href="/">Home</Link></li>
        <li className={styles.links}><Link href="/About">About us</Link></li>
        <li className={styles.links}><Link href="/Contact">Contact</Link></li>
      </ul>
    </div>
  );
}