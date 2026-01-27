import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseVietnam, { ReadmeMd } from '@/apps/Vietnam/Vietnam';
const { metadata, App: Vietnam } = getAppAndMetadata('/vietnam', {
  app: BaseVietnam,
  readme: ReadmeMd,
});
export default Vietnam;
export { metadata };
