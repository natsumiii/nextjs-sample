import Link from 'next/link';
import styles from './page.module.scss';

export default function FormSamplePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>フォームサンプル</h1>
      <div className={styles.buttonGroup}>
        <Link href="/form-sample/new" className={styles.button}>
          新規作成
        </Link>
        <Link href="/form-sample/edit" className={styles.button}>
          編集
        </Link>
      </div>
    </div>
  );
}