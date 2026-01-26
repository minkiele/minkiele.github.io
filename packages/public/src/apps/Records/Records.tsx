import { getCompressedDiscography } from './Records.utils';
import Memory from './components/Memory/Memory';
import LastBuild from './components/LastBuild/LastBuild';
import Decompressor from './components/Decompressor/Decompressor';

export default async function Records() {
  const { discography, tokens } = await getCompressedDiscography();

  return (
    <>
      <Decompressor
        discography={discography}
        tokens={tokens}
        component={Memory}
        mapTo="deck"
      />
      <LastBuild />
    </>
  );
}
