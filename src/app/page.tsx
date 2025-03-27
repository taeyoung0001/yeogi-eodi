import HomeView from "@/view/homeView/homeView";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeView />
    </div>
  );
}
