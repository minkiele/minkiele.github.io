import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseOraInParole from '@/apps/OraInParole/OraInParole';
const { metadata, App: OraInParole } = getAppAndMetadata('/parole', BaseOraInParole);
export default OraInParole;
export { metadata };
