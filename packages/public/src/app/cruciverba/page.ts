import BaseCruciverba, { ReadmeMd } from '@/apps/Cruciverba/Cruciverba';
import { getAppAndMetadata } from '@/apps/App/AppWrapper';

const { metadata, App: Cruciverba } = getAppAndMetadata(
  '/cruciverba',
  BaseCruciverba,
  { readme: ReadmeMd }
);
export default Cruciverba;
export { metadata };
