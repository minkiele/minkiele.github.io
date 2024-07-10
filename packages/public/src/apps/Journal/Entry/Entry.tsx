'use client';

import Link from 'next/link';
import entries from '../entries';

export default function Entry({
  params: { entry },
}: {
  params: { entry: string };
}) {
  const Component = entries.find(({ entry: listEntry }) => entry === listEntry)?.component;
  return (
    <div>
      {Component && <Component />}
      <Link href="/journal">Back</Link>
    </div>
  );
}
