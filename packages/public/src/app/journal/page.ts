import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseJournal from '@/apps/Journal/Journal';
const { metadata, App: Journal } = getAppAndMetadata('/journal', {
  app: BaseJournal,
});
export default Journal;
export { metadata };
