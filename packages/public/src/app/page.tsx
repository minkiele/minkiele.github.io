import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseInfo, { ReadmeMd } from '@/apps/Info/Info';
const { metadata, App: Info } = getAppAndMetadata('/', BaseInfo, {
  readme: ReadmeMd,
});

export default Info;
export { metadata };
