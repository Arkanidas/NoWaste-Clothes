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
          <br></br>  <br></br>
        Vi arbetar för att nå fram till människor som saknar tillgång till det mest grundläggande - inte för att vi har allt, utan för att vi vill dela med oss av det vi kan.
        Vår verksamhet bygger på solidaritet, medkänslighet och ett djupt engagemang för att bidra till en mer rättvis och hållbar värld.
          <br></br>  <br></br>
        En viktig del av vårt arbete handlar också om återbruk. Genom att ta tillvara på saker som fortfarande har värde minskar vi onödigt avfall och bidrar till att skydda miljön.
        Att hjälpa andra och samtidigt ta ansvar för klimatet går hand i hand i vårt arbete.
          <br></br>  <br></br>
        Idel Förening är en ideell organisation som drivs av frivillighet, ödmjukhet och viljan att göra skillnad - oavsett avstånd.
     </p>
    </>
  );
}
