import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseEntry from '@/apps/Journal/Entry/Entry';
import entries, { JournalEntry } from '@/apps/Journal/entries';
import { Metadata, ResolvingMetadata } from 'next';
import { map, pick } from 'ramda';

const getEntries = map<JournalEntry, Pick<JournalEntry, 'entry'>>(
  pick(['entry'])
);

const { metadata, App: Entry } = getAppAndMetadata('/journal', {
  app: BaseEntry,
  isAsync: true,
});

export default Entry;

export const dynamic = 'force-static';

export function generateStaticParams() {
  return getEntries(entries);
}

type Params = Promise<{ entry: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { entry } = await params;
  const title = metadata.title ? `${metadata.title} - ${entry}` : entry;
  const description = metadata.description
    ? `${metadata.description} - ${entry}`
    : entry;
  return { ...metadata, title, description };
}
