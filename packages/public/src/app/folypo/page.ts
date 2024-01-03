import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BasePolypo from '@/apps/Polypo/Polypo';
const { metadata, App: Polypo } = getAppAndMetadata('/folypo', BasePolypo);
export default Polypo;
export { metadata };
