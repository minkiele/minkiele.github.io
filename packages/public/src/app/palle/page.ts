import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseCircles, { ReadmeMd } from '@/apps/Circles/Circles';
const { metadata, App: Circles } = getAppAndMetadata('/palle', BaseCircles, {
  readme: ReadmeMd,
});
export default Circles;
export { metadata };
