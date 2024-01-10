import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseRecords from '@/apps/Records/Records';
const { metadata, App: Records } = getAppAndMetadata('/records', BaseRecords);
export default Records;
export { metadata };
