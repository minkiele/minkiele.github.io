import { getDiscography } from './Records.utils';
import Readme from './components/Readme/Readme';
import Memory from './components/Memory/Memory';
import Guess from './components/Guess/Guess';

export default async function Records() {
  const myDiscography = await getDiscography();

  return (
    <div>
      <Readme />
      <Memory deck={myDiscography} />
      <Guess deck={myDiscography} />
    </div>
  );
}
