import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import ReadmeMd from '@/apps/Info/Info';
const { metadata, App: Info } = getAppAndMetadata('/', {
  readme: ReadmeMd,
});

export default Info;
export { metadata };
