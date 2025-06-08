
import styles from "./page.module.css";
import Imagebanner from "../../components/Imagebanner";






export default function Home() {

  
  
  return (
    <div>
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

<p className={styles.header}>Varför donera via Nowaste?</p>

 <div className={styles.reasonGrid}>
    <div className={styles.reasonItem}>
      <img src="/good.png" alt="Convenient" />
      <h4>Bekvämlighet</h4>
      <p>En väldigt bekvämlig och simpel process där du enkelt kan kontakta oss via vår kontaktsida och sedan boka ett möte smidigt via oss</p>
    </div>

    <div className={styles.reasonItem}>
      <img src="/good2.png" alt="Feel Good" />
      <h4>Feel good faktor</h4>
      <p>Att ge får dig att kännas bättre som bidrar till positivitet kring dig och andra</p>
    </div>

    <div className={styles.reasonItem}>
      <img src="/good3.png" alt="Valued Donations" />
      <h4>Dina donationer är värdefulla</h4>
      <p>Vi ser till att dina gamla tillhörigheter kommer till nytta hos andra som verkligen behöver dem</p>
    </div>

    <div className={styles.reasonItem}>
      <img src="/good4.png" alt="Transparency" />
      <h4>Transparant process</h4>
      <p>Dina donationer verifieras och går igenom vår betrodda partner för granskning innan avsändning</p>
    </div>

    <div className={styles.reasonItem}>
      <img src="/good6.png" alt="Surprise Rewards" />
      <h4>Bli belönad! </h4>
      <p>Ju mer du donerar via oss desto mer kommer du kunna gynnas av våra förutsättningar såsom kuponger & feedback från barnen</p>
    </div>

    <div className={styles.reasonItem}>
      <img src="/good5.png" alt="Eco Friendly" />
      <h4>Rädda miljön</h4>
      <p>Slipp att tänka på vad du ska göra med gamla ägodelar och rädda miljön istället genom att ge dem nytt liv till behövande människor</p>
    </div>
  </div>
</div>


</div>

 
  );
}
