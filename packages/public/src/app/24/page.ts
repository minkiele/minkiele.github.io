import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseTwentyFourClock from '@/apps/TwentyFourClock/TwentyFourClock';
const { metadata, App: TwentyFourClock } = getAppAndMetadata('/', BaseTwentyFourClock);

export default TwentyFourClock;

export { metadata };
