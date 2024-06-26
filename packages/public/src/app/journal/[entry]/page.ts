import { getDynamicAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseEntry from '@/apps/Journal/Entry/Entry';
import { ids } from '@/apps/Journal/entries';
const {
  metadata,
  dynamic,
  App: Entry,
} = getDynamicAppAndMetadata('/journal', BaseEntry);
export default Entry;
export { metadata, dynamic };

export function generateStaticParams() {
  return ids.map((entry) => ({ entry }));
}
