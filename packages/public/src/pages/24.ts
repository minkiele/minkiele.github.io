import TwentyFourClock from '@/apps/TwentyFourClock/TwentyFourClock';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default TwentyFourClock;

export const getStaticProps = getGetStaticProps('/24');
