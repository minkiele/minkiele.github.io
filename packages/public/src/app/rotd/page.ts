import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseROTD from '@/apps/ROTD/ROTD';
const { metadata, App: ROTD } = getAppAndMetadata('/rotd', BaseROTD);
export default ROTD;
export { metadata };
