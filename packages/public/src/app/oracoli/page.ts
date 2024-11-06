import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseOracoli from '@/apps/Oracoli/Oracoli';
const { metadata, App: Oracoli } = getAppAndMetadata('/oracoli', BaseOracoli);
export default Oracoli;
export { metadata };
