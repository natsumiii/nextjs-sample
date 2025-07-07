'use client';

import { useState } from 'react';

type FlashMessageState = {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  isVisible: boolean;
}

export function useFlashMessage() {
  const [flashMessage, setFlashMessage] = useState<FlashMessageState>({
    message: '',
    type: 'success',
    isVisible: false
  });

  const showMessage = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'success') => {
    setFlashMessage({
      message,
      type,
      isVisible: true
    });
  };

  const hideMessage = () => {
    setFlashMessage(prev => ({ ...prev, isVisible: false }));
  };

  const showSuccess = (message: string) => showMessage(message, 'success');
  const showError = (message: string) => showMessage(message, 'error');
  const showWarning = (message: string) => showMessage(message, 'warning');
  const showInfo = (message: string) => showMessage(message, 'info');

  return {
    flashMessage,
    showMessage,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    hideMessage
  };
}