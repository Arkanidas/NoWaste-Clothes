import Link from "next/link";
import styles from "../components /navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.Border}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/About">About us</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}