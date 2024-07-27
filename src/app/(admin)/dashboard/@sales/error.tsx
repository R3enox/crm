'use client';
import * as React from 'react';

export interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return <div>{error.message} inside slot sales</div>;
}
