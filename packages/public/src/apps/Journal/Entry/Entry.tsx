'use client';

import Link from 'next/link';
import entries from '../entries';
import { headingsMap } from './Entry.utils';
import { isValidElement } from 'react';

export default function Entry({
  params: { entry },
}: {
  params: { entry: string };
}) {
  const Component = entries.find(({ entry: listEntry }) => entry === listEntry)?.component;
  return (
    <div>
      {isValidElement(Component) && <Component components={headingsMap} />}
      <Link href="/journal">Back</Link>
    </div>
  );
}
