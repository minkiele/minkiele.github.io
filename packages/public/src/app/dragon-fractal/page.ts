import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseDragons from '@/apps/Dragons/Dragons';
const { metadata, App: Dragons } = getAppAndMetadata('/dragon-fractal', BaseDragons);
export default Dragons;
export { metadata };
