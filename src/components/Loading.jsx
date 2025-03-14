import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingSpinner}>
      <div className={styles.spinner}></div>
      <p>Loading recipe...</p>
    </div>
  );
}
