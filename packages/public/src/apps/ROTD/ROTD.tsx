import Decompressor from '../Records/components/Decompressor/Decompressor';
import LastBuild from '../Records/components/LastBuild/LastBuild';
import { getCompressedDiscography } from '../Records/Records.utils';
import Display from './components/Display/Display';

export default async function ROTD() {
  const {discography: myDiscography, tokens} = await getCompressedDiscography();

  return (
    <>
      <Decompressor discography={myDiscography} tokens={tokens} component={Display} />
      <LastBuild />
    </>
  );
}
