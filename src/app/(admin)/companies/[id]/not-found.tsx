import Link from 'next/link';
import * as React from 'react';

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <Link href="/companies" className="text-blue-500">
        Back to companies.
      </Link>
    </div>
  );
}
