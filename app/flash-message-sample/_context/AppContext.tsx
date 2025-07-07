'use client';

import React, { createContext, useContext, useState } from 'react';
import { useFlashMessage } from '../_hooks/useFlashMessage';

type AppContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  flashMessage: {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    isVisible: boolean;
  };
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showWarning: (message: string) => void;
  showInfo: (message: string) => void;
  hideMessage: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const { flashMessage, showSuccess, showError, showWarning, showInfo, hideMessage } = useFlashMessage();

  const increment = () => {
    setCount(prev => prev + 1);
    showSuccess('カウントを増やしました');
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    showInfo('カウントを減らしました');
  };

  const reset = () => {
    setCount(0);
    showWarning('カウントをリセットしました');
  };

  const value = {
    count,
    increment,
    decrement,
    reset,
    flashMessage,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    hideMessage
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}