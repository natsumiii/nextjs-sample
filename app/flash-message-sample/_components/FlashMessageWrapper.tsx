'use client';

import React from 'react';
import { FlashMessage } from './FlashMessage';
import { useApp } from '../_context/AppContext';

export function FlashMessageWrapper() {
  const { flashMessage, hideMessage } = useApp();

  return (
    <FlashMessage
      message={flashMessage.message}
      type={flashMessage.type}
      isVisible={flashMessage.isVisible}
      onClose={hideMessage}
      duration={3000}
    />
  );
}