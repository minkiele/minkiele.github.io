import OraInParole from '@/apps/OraInParole/OraInParole';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default OraInParole;

export const getStaticProps = getGetStaticProps('/parole');
