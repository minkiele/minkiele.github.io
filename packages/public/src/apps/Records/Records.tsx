import Image from 'next/image';
import { getDiscography } from './Records.utils';
import Readme from './components/Readme/Readme';
import Memory from './components/Memory/Memory';

export default async function Records() {
  const myDiscography = await getDiscography();

  return (
    <div>
      <Readme />
      <Memory source={myDiscography} />
    </div>
  );
}
