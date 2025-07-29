'use client';

import Link from 'next/link';
import entries from '../entries';
import { use } from 'react';

export default function Entry({
  params,
}: {
  params: Promise<{ entry: string }>;
}) {
  const { entry } = use(params);
  const Component = entries.find(({ entry: listEntry }) => entry === listEntry)?.component;
  return (
    <div>
      {Component && <Component />}
      <Link href="/journal" prefetch={false}>Back</Link>
    </div>
  );
}
