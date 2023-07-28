import Md2Html from '@/apps/Md2Html/Md2Html';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default Md2Html;

export const getStaticProps = getGetStaticProps('/md2html');
