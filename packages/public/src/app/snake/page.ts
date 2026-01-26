import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseSnake, { ReadmeMd } from '@/apps/Snake/Snake';
const { metadata, App: Snake } = getAppAndMetadata('/snake', BaseSnake, {
  readme: ReadmeMd,
});
export default Snake;
export { metadata };
