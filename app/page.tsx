import Link from 'next/link'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Next.js サンプル</h1>

        <Link
          href="/form-sample"
          className={styles.card}
        >
          <h2>
            React Hook Form sample <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/flash-message-sample"
          className={styles.card}
        >
          <h2>
            Flash Message sample <span>-&gt;</span>
          </h2>
        </Link>
      </main>
    </div>
  );
}
