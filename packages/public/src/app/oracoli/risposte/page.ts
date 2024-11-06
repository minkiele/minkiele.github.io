import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseRisposte from '@/apps/Oracoli/Risposte/Risposte';
const { metadata, App: Risposte } = getAppAndMetadata('/oracoli/risposte', BaseRisposte);
export default Risposte;
export { metadata };
