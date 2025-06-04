// components/ClientLayout.tsx
'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Adjust delay if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && children}
    </>
  );
}
