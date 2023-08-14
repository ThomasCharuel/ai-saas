'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('782144d0-4e8b-4199-9b56-9fdc2b7c94b8');
  }, []);

  return null;
};
