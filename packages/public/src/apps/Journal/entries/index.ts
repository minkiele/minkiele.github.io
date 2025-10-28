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

entries.push({
  entry: '002-folklore',
  component: dynamic(() => import('./002-folklore.md')),
});

entries.push({
  entry: '003-advent',
  component: dynamic(() => import('./003-advent.md')),
});

entries.push({
  entry: '004-2030',
  component: dynamic(() => import('./004-2030.md')),
});
