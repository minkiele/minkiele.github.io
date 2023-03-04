import Triangles from '@/apps/Triangles/Triangles';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default Triangles;

export const getStaticProps = getGetStaticProps('/fibonacci-triangle');
