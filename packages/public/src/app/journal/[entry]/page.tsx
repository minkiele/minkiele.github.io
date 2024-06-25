import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseEntry from '@/apps/Journal/Entry/Entry';
import { ids } from '@/apps/Journal/entries';
const { metadata, App: Entry } = getAppAndMetadata('/journal', BaseEntry);
export default Entry;
export { metadata };

export function generateStaticParams() {
  return ids.map((entry) => ({ entry }));
}
