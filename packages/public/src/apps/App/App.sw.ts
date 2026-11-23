'use client';

import { FC, useEffect } from 'react';

const AppSW: FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/service-worker.js');
        }
      });
    }
  }, []);
  return null;
};

export default AppSW;
