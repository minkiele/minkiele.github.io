'use client';

import Link from 'next/link';
import entries from '../entries';
import { headingsMap } from './Entry.utils';

export default function Entry({
  params: { entry },
}: {
  params: { entry: string };
}) {
  const Content = entries.find(({ id }) => id === entry)?.entry;
  return (
    <div>
      {Content && <Content components={headingsMap} />}
      <Link href="/journal">Back</Link>
    </div>
  );
}
