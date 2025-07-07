'use client';

import { useState, useEffect } from 'react';
import styles from './FlashMessage.module.scss';

type FlashMessageType = 'success' | 'warning' | 'error' | 'info';

interface FlashMessageProps {
  message: string;
  type: FlashMessageType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function FlashMessage({
  message,
  type,
  isVisible,
  onClose,
  duration = 5000
}: FlashMessageProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onClose();
      setIsAnimating(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.flashMessage} ${styles[type]} ${isAnimating ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <span className={styles.message}>{message}</span>
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>
      </div>
    </div>
  );
}