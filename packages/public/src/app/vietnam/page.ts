import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseVietnam from '@/apps/Vietnam/Vietnam';
const { metadata, App: Vietnam } = getAppAndMetadata('/vietnam', BaseVietnam);
export default Vietnam;
export { metadata };
