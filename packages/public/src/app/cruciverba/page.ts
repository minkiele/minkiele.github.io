import BaseCruciverba, { ReadmeMd } from '@/apps/Cruciverba/Cruciverba';
import { getAppAndMetadata } from '@/apps/App/AppWrapper';

const { metadata, App: Cruciverba } = getAppAndMetadata('/cruciverba', {
  app: BaseCruciverba,
  readme: ReadmeMd,
});
export default Cruciverba;
export { metadata };
