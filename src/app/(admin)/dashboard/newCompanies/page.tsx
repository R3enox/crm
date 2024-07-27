import * as React from 'react';
import Header from '@/app/components/Header';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <Header>Dashboard / New Companies</Header>
      <div>Some additional info</div>
    </main>
  );
}
