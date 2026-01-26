import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BasePolypo, { ReadmeMd } from '@/apps/Polypo/Polypo';
const { metadata, App: Polypo } = getAppAndMetadata('/folypo', BasePolypo, {
  readme: ReadmeMd,
});

export default Polypo;
export { metadata };
