import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseDemoDogs, { ReadmeMd } from '@/apps/DemoDogs/DemoDogs';
const { metadata, App: DemoDogs } = getAppAndMetadata(
  '/demodogs',
  BaseDemoDogs,
  { readme: ReadmeMd }
);
export default DemoDogs;
export { metadata };
