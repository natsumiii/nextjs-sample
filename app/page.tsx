import Link from 'next/link'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Next.js サンプル</h1>

        <Link
          href="/form-demo"
          className={styles.card}
        >
          <h2>
            React Hook Form Demo <span>-&gt;</span>
          </h2>
        </Link>
      </main>
    </div>
  );
}
