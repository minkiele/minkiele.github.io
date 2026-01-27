import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseRecords from '@/apps/Records/Records';
import ReadmeMd from '@/apps/Records/Readme';
const { metadata, App: Records } = getAppAndMetadata('/records', {
  app: BaseRecords,
  readme: ReadmeMd,
});
export default Records;
export { metadata };
