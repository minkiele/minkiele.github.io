import BaseFifteen from '@/apps/Fifteen/Fifteen';
import { getAppAndMetadata } from '@/apps/App/AppWrapper';

const { metadata, App: Fifteen } = getAppAndMetadata('/fifteen', BaseFifteen);

export default Fifteen;

export { metadata };
