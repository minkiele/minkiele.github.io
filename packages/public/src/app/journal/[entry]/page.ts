import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseEntry from '@/apps/Journal/Entry/Entry';
import entries, { JournalEntry } from '@/apps/Journal/entries';
import { map, pick } from 'ramda';

const getEntries = map<JournalEntry, Pick<JournalEntry, 'entry'>>(
  pick(['entry'])
);

const { metadata, App: Entry } = getAppAndMetadata('/journal', BaseEntry, {
  isAsync: true,
});
export default Entry;

export const dynamic = 'force-static';

export { metadata };

export function generateStaticParams() {
  return getEntries(entries);
}
