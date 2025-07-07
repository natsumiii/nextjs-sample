'use client';

import React from 'react';
import { AppProvider } from './_context/AppContext';
import { Counter } from './_components/Counter';
import { FlashMessageWrapper } from './_components/FlashMessageWrapper';
import styles from './_styles/page.module.css';

export default function FlashMessageSample() {
  return (
    <AppProvider>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Flash Message サンプル</h1>
          <p>Context APIとカスタムフックを使用したシンプルなカウンターアプリ</p>
        </div>

        <FlashMessageWrapper />

        <div className={styles.app}>
          <Counter />
        </div>

        <div className={styles.features}>
          <h2>実装されている機能</h2>
          <ul>
            <li><strong>Context API</strong>: コンポーネント間での状態共有</li>
            <li><strong>カスタムフック</strong>: useFlashMessageによるメッセージ管理の抽象化</li>
            <li><strong>FlashMessage</strong>: 再利用可能なメッセージ表示コンポーネント</li>
            <li><strong>シンプルなカウンター</strong>: カウントの増加・減少・リセット</li>
            <li><strong>リアルタイム通知</strong>: 各アクションでのメッセージ表示</li>
          </ul>
        </div>
      </div>
    </AppProvider>
  );
}