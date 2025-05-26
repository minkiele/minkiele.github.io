import { getDiscography } from './Records.utils';
import Memory from './components/Memory/Memory';

export default async function Records() {
  const myDiscography = await getDiscography();

  return <Memory deck={myDiscography} />;
}
