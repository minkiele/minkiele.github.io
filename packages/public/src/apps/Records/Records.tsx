import dayjs from 'dayjs';
import { getDiscography } from './Records.utils';
import Memory from './components/Memory/Memory';
import LastBuild from './components/LastBuild/LastBuild';

export default async function Records() {
  const myDiscography = await getDiscography();

  return (
    <div>
      <Memory deck={myDiscography} />
      <LastBuild />
    </div>
  );
}
