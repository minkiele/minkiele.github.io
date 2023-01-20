import Dragons from '@/apps/Dragons/Dragons';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default Dragons;

export const getStaticProps = getGetStaticProps('/dragon-fractal');
