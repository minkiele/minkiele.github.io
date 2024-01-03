import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseInfo from '@/apps/Info/Info';
const { metadata, App: Info } = getAppAndMetadata('/', BaseInfo);

export default Info;
export { metadata };
