'use client';

import React, { useEffect } from 'react';
import styles from '../_styles/page.module.css';

type FlashMessageProps = {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export function FlashMessage({ message, type, isVisible, onClose, duration = 3000 }: FlashMessageProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return styles.success;
      case 'error':
        return styles.error;
      case 'warning':
        return styles.warning;
      case 'info':
        return styles.info;
      default:
        return styles.success;
    }
  };

  return (
    <div className={`${styles.flashMessage} ${getTypeStyles()}`}>
      <span className={styles.message}>{message}</span>
      <button onClick={onClose} className={styles.closeButton}>
        ×
      </button>
    </div>
  );
}