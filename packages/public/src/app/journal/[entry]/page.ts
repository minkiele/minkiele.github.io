import { getDynamicAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseEntry from '@/apps/Journal/Entry/Entry';
import entries, { JournalEntry } from '@/apps/Journal/entries';
import { map, pick } from 'ramda';

const getEntries = map<JournalEntry, Pick<JournalEntry, 'entry'>>(pick(['entry']));

const {
  metadata,
  App: Entry,
} = getDynamicAppAndMetadata('/journal', BaseEntry);
export default Entry;

export const dynamic = 'force-static';

export { metadata };

export function generateStaticParams() {
  return getEntries(entries);
}
