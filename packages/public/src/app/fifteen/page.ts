import BaseFifteen, { ReadmeMd } from '@/apps/Fifteen/Fifteen';
import { getAppAndMetadata } from '@/apps/App/AppWrapper';

const { metadata, App: Fifteen } = getAppAndMetadata('/fifteen', BaseFifteen, {
  readme: ReadmeMd,
});

export default Fifteen;

export { metadata };
