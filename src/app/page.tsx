
import styles from "./page.module.css";
import Imagebanner from "../../components/Imagebanner";






export default function Home() {

  
  
  return (
    <div style={{ height:"2500px" }}>
<Imagebanner/>

<div className={styles.workwallpaper}>
<p className={styles.header}>Hur Jobbar vi?</p>


  <div className={styles.workcontainer}>
<div className={styles.workstep}>
    <img src="/man.png" alt="Schedule a Pickup" />
    <h3>Förberedelse</h3>
    <p>
      Förbered dina saker som du vill donera. Se till att de är rena och i gott skick. 
      Om du har kläder, se till att de är tvättade och vikta. Om du har möbler, se till att de är i bra skick.
    </p>
  </div>

  <div className={styles.workstep}>
    <img src="/man.png" alt="Donate at your Doorstep" />
    <h3>Boka tid</h3>
    <p>
      Boka en tid hos oss genom vår kontakt länk och berätta mer om vad du vill donera så anordnar vi en hämtning.
    </p>
  </div>

  <div className={styles.workstep}>
    <img src="/man.png" alt="Get Rewards" />
    <h3>Plockning</h3>
    <p>
      Efter att vi har arrangerat en tid och plats för hämtning, kommer vårt team att komma till din plats och hämta dina saker som du förberett. 
    </p>
  </div>
 </div>
</div>

<div className={styles.workwallpaper2}>
<p className={styles.header}>Vad kan du Donera?</p>

<div className={styles.iconGrid}>
  <div className={styles.iconItem}>
    <div className={styles.circle}>
      <img src="/shoe.png" alt="Shoes" />
    </div>
    <p>Skor</p>
  </div>
  <div className={styles.iconItem}>
    <div className={styles.circle}>
      <img src="/stationary.png" alt="Stationery" />
    </div>
    <p>Pappersvaror</p>
  </div>
  <div className={styles.iconItem}>
    <div className={styles.circle}>
      <img src="/bag.png" alt="Bags" />
    </div>
    <p>Väskor</p>
  </div>
  <div className={styles.iconItem}>
    <div className={styles.circle}>
      <img src="/shirt.png" alt="Clothes" />
    </div>
    <p>Kläder</p>
  </div>
  <div className={styles.iconItem}>
    <div className={styles.circle}>
      <img src="/sofa.png" alt="Furniture" />
    </div>
    <p>Möbler</p>
  </div>
</div>
</div>


<div className={styles.workwallpaper3}>






</div>

    </div>
  );
}
