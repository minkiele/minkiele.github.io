import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseSoundPad, { ReadmeMd } from '@/apps/SoundPad/SoundPad';
const { metadata, App: SoundPad } = getAppAndMetadata(
  '/soundpad',
  BaseSoundPad,
  { readme: ReadmeMd }
);
export default SoundPad;
export { metadata };
