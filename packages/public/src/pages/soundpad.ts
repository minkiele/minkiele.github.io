import SoundPad from '@/apps/SoundPad/SoundPad';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default SoundPad;

export const getStaticProps = getGetStaticProps('/soundpad');
