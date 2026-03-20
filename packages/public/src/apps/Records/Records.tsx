import { getCompressedDiscography } from './Records.utils';
import Memory from './components/Memory/Memory';
import Decompressor from './components/Decompressor/Decompressor';

export default async function Records() {
  const { discography, tokens, sep } = await getCompressedDiscography();

  return (
    <Decompressor
      discography={discography}
      tokens={tokens}
      sep={sep}
      component={Memory}
      mapTo="deck"
    />
  );
}
