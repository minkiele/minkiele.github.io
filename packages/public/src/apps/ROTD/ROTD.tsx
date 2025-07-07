import LastBuild from '../Records/components/LastBuild/LastBuild';
import { getDiscography } from '../Records/Records.utils';
import Display from './components/Display/Display';

export default async function ROTD() {
  const myDiscography = await getDiscography();

  return (
    <>
      <Display discography={myDiscography} />
      <LastBuild />
    </>
  );
}
