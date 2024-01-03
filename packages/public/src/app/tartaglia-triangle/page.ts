import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseTriangles from '@/apps/Triangles/Triangles';
const { metadata, App: Triangles } = getAppAndMetadata('/tartaglia-triangle', BaseTriangles);
export default Triangles;
export { metadata };
