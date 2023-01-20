import Anagrammator from '@/apps/Anagrammator/Anagrammator';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default Anagrammator;

export const getStaticProps = getGetStaticProps('/anagrammator');
