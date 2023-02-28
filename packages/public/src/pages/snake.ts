import Snake from '@/apps/Snake/Snake';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default Snake;

export const getStaticProps = getGetStaticProps('/snake');
