import NumeriCasuali from '@/apps/NumeriCasuali/NumeriCasuali';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default NumeriCasuali;

export const getStaticProps = getGetStaticProps('/numeri-a-caso');
