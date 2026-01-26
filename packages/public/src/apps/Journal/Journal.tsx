import Link from 'next/link';
import entries, { JournalEntry } from './entries';
import { comparator, sort } from 'ramda';

const sortEntries = sort(
  comparator<JournalEntry>(({ entry: a }, { entry: b }) => a > b)
);

export default async function Journal() {
  return (
    <ol>
      {sortEntries(entries).map(({ entry }) => (
        <li key={entry}>
          <Link href={`/journal/${entry}`} prefetch={false}>
            {entry}
          </Link>
        </li>
      ))}
    </ol>
  );
}
