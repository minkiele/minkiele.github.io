import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseCircles from '@/apps/Circles/Circles';
const { metadata, App: Circles } = getAppAndMetadata('/palle', BaseCircles);
export default Circles;
export { metadata };
