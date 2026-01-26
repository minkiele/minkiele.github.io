import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseOraInParole, { ReadmeMd } from '@/apps/OraInParole/OraInParole';
const { metadata, App: OraInParole } = getAppAndMetadata(
  '/parole',
  BaseOraInParole,
  { readme: ReadmeMd }
);
export default OraInParole;
export { metadata };
