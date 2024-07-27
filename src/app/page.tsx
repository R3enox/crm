'use client';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('companies');
  }, [router]);
  return <main></main>;
}
