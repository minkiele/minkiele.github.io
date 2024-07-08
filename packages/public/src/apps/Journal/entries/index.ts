import dynamic from 'next/dynamic';

const entries = [
  {
    id: '001-warioland',
    entry: dynamic(() => import('./001-warioland.md')),
  },
  {
    id: '000-why',
    entry: dynamic(() => import('./000-why.md')),
  },
];

export default entries;

export const ids = entries.map(({ id }) => id);
