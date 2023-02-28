import Factorizer from '@/apps/Factorizer/Factorizer';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default Factorizer;

export const getStaticProps = getGetStaticProps('/factorize');
