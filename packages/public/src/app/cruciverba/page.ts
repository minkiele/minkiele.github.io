import BaseCruciverba from '@/apps/Cruciverba/Cruciverba';
import { getAppAndMetadata } from '@/apps/App/AppWrapper';

const { metadata, App: Cruciverba } = getAppAndMetadata(
  '/cruciverba',
  BaseCruciverba
);
export default Cruciverba;
export { metadata };
