import { getCompressedDiscography } from './Records.utils';
import Decompressor from './components/Decompressor/Decompressor';
import LastBuild from './components/LastBuild/LastBuild';
import Memory from './components/Memory/Memory';

export default async function Records() {
  const discography = await getCompressedDiscography();

  return (
    <div>
      <Decompressor discography={discography} component={Memory} mapTo="deck" />
      <LastBuild />
    </div>
  );
}
