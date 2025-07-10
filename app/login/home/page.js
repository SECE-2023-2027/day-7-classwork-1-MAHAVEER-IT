'use client'
import Count from '@/app/components/Count';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('authenticated');
    if (auth !== 'true') {
      router.replace('/login');
    }
  }, []);

  return <Count />;
}

export default Home;
