import { getCompressedDiscography } from './Records.utils';
import Memory from './components/Memory/Memory';
import LastBuild from './components/LastBuild/LastBuild';
import Decompressor from './components/Decompressor/Decompressor';

export default async function Records() {
  const compressed = await getCompressedDiscography();

  return (
    <div>
      <Decompressor discography={compressed} component={Memory} mapTo='deck' />
      <LastBuild />
    </div>
  );
}
