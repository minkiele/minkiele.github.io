import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseROTD from '@/apps/ROTD/ROTD';
import ReadmeMd from '@/apps/ROTD/Readme';
const { metadata, App: ROTD } = getAppAndMetadata('/rotd', {
  app: BaseROTD,
  readme: ReadmeMd,
});
export default ROTD;
export { metadata };
