import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseNumeriCasuali, {
  ReadmeMd,
} from '@/apps/NumeriCasuali/NumeriCasuali';
const { metadata, App: NumeriCasuali } = getAppAndMetadata('/numeri-a-caso', {
  app: BaseNumeriCasuali,
  readme: ReadmeMd,
});
export default NumeriCasuali;
export { metadata };
