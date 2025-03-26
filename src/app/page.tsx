import styles from "./page.module.css";
import HomeView from "./view/homeView/homeView";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeView />
    </div>
  );
}
