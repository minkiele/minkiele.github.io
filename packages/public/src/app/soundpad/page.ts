import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseSoundPad from '@/apps/SoundPad/SoundPad';
const { metadata, App: SoundPad } = getAppAndMetadata('/soundpad', BaseSoundPad);
export default SoundPad;
export { metadata };
