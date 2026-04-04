import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseIBAN, { ReadmeMd } from '@/apps/IBAN/IBAN';
const { metadata, App: IBAN } = getAppAndMetadata('/iban', {
  app: BaseIBAN,
  readme: ReadmeMd,
});

export default IBAN;
export { metadata };
