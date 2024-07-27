'use client';
import Button from '@/app/components/Button';
import * as React from 'react';

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again.</Button>
    </div>
  );
}
