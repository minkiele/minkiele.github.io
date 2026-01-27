import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseTwentyFourClock, {
  ReadmeMd,
} from '@/apps/TwentyFourClock/TwentyFourClock';
const { metadata, App: TwentyFourClock } = getAppAndMetadata('/24', {
  app: BaseTwentyFourClock,
  readme: ReadmeMd,
});

export default TwentyFourClock;

export { metadata };
