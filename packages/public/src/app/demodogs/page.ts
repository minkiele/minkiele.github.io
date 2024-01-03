import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseDemoDogs from '@/apps/DemoDogs/DemoDogs';
const { metadata, App: DemoDogs } = getAppAndMetadata('/demodogs', BaseDemoDogs);
export default DemoDogs;
export { metadata };
