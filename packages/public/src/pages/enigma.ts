import Enigma from '@/apps/Enigma/Enigma';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default Enigma;

export const getStaticProps = getGetStaticProps('/enigma');
