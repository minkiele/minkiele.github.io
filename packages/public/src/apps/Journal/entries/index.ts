import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import type { MDXProps } from 'mdx/types';

export interface JournalEntry {
  entry: string;
  component: ComponentType<MDXProps>;
}

const entries: Array<JournalEntry> = [];
export default entries;

entries.push({
  entry: '000-why',
  component: dynamic(() => import('./000-why.md')),
});

entries.push({
  entry: '001-warioland',
  component: dynamic(() => import('./001-warioland.md')),
});
