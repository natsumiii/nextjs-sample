'use client';

import React from 'react';
import { useApp } from '../_context/AppContext';
import styles from '../_styles/page.module.css';

export function Counter() {
  const { count, increment, decrement, reset } = useApp();

  return (
    <div className={styles.counter}>
      <div className={styles.counterHeader}>
        <h3>カウンター</h3>
        <span className={styles.counterValue}>{count}</span>
      </div>
      <div className={styles.counterControls}>
        <button onClick={decrement} className={styles.button}>
          -1
        </button>
        <button onClick={reset} className={styles.button}>
          リセット
        </button>
        <button onClick={increment} className={styles.button}>
          +1
        </button>
      </div>
    </div>
  );
}