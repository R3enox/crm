import * as React from 'react';
import Header from '@/app/components/Header';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <Header>Dashboard</Header>
    </main>
  );
}
