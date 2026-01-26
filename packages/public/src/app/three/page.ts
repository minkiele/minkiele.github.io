import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseThree, { ReadmeMd } from '@/apps/Three/Three';
const { metadata, App: Three } = getAppAndMetadata('/three', BaseThree, {
  readme: ReadmeMd,
});
export default Three;
export { metadata };
