import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseThree from '@/apps/Three/Three';
const { metadata, App: Three } = getAppAndMetadata('/three', BaseThree);
export default Three;
export { metadata };
