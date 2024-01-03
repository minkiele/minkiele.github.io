import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseTwentyFourClock from '@/apps/TwentyFourClock/TwentyFourClock';
const { metadata, App: TwentyFourClock } = getAppAndMetadata('/24', BaseTwentyFourClock);

export default TwentyFourClock;

export { metadata };
