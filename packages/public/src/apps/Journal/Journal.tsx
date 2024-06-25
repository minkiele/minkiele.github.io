import Link from 'next/link';
import { ids } from './entries';

export default async function Journal() {
  return (
    <div>
      <ol>
        {ids.map((entry) => (
          <li key={entry}>
            <Link href={`/journal/${entry}`}>{entry}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
