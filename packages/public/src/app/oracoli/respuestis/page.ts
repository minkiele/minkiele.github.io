import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseRespuestis from '@/apps/Oracoli/Respuestis/Respuestis';
const { metadata, App: Respuestis } = getAppAndMetadata('/oracoli/respuestis', BaseRespuestis);
export default Respuestis;
export { metadata };
