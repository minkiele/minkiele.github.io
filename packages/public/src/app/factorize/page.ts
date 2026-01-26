import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseFactorizer, { ReadmeMd } from '@/apps/Factorizer/Factorizer';
const { metadata, App: Factorizer } = getAppAndMetadata(
  '/factorize',
  BaseFactorizer,
  { readme: ReadmeMd }
);
export default Factorizer;
export { metadata };
