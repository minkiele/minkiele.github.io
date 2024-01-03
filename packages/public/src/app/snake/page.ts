import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseSnake from '@/apps/Snake/Snake';
const { metadata, App: Snake } = getAppAndMetadata('/snake', BaseSnake);
export default Snake;
export { metadata };
