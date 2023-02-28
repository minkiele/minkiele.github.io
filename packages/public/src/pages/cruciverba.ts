import Cruciverba from '@/apps/Cruciverba/Cruciverba';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default Cruciverba;

export const getStaticProps = getGetStaticProps('/cruciverba');
