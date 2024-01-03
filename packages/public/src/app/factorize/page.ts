import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseFactorizer from '@/apps/Factorizer/Factorizer';
const { metadata, App: Factorizer } = getAppAndMetadata('/factorize', BaseFactorizer);
export default Factorizer;
export { metadata };
