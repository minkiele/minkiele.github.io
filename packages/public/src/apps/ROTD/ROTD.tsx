import { getDiscography } from '../Records/Records.utils';
import Grid from './components/Grid/Grid';

export default async function ROTD() {
  const myDiscography = await getDiscography();

  // return <Display discography={myDiscography} />;
  return <Grid discography={myDiscography} />;
}
