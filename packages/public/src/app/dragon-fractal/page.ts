import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseDragons, { ReadmeMd } from '@/apps/Dragons/Dragons';
const { metadata, App: Dragons } = getAppAndMetadata('/dragon-fractal', {
  app: BaseDragons,
  readme: ReadmeMd,
});
export default Dragons;
export { metadata };
