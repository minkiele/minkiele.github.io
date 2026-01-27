import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseTriangles, { ReadmeMd } from '@/apps/Triangles/Triangles';
const { metadata, App: Triangles } = getAppAndMetadata('/tartaglia-triangle', {
  app: BaseTriangles,
  readme: ReadmeMd,
});
export default Triangles;
export { metadata };
