import styles from "./home.module.css";
import "./globals.css";

export default function Home() {
  return (
    <main className={`${styles.content} flex`} data-testid="home">
      <div className={`${styles.homeHeader} flex`}>
        <h1 className={`flicker ${styles.name}`}>Daron Wiafe</h1>
        <p className={`appear ${styles.subtext}`}>Software developer</p>
        <p className={`appearText ${styles.msg}`}>
          Developing more than just software
        </p>
      </div>
    </main>
  );
}
