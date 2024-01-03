import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseNumeriCasuali from '@/apps/NumeriCasuali/NumeriCasuali';
const { metadata, App: NumeriCasuali } = getAppAndMetadata('/numeri-a-caso', BaseNumeriCasuali);
export default NumeriCasuali;
export { metadata };
