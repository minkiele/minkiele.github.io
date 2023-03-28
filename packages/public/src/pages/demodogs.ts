import DemoDogs from '@/apps/DemoDogs/DemoDogs';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default DemoDogs;

export const getStaticProps = getGetStaticProps('/demodogs');
