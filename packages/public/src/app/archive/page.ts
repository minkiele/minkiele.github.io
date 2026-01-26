import BaseTheArchive, { ReadmeMd } from '@/apps/TheArchive/TheArchive';
import { getAppAndMetadata } from '@/apps/App/AppWrapper';
const { metadata, App: TheArchive } = getAppAndMetadata(
  '/archive',
  BaseTheArchive,
  { readme: ReadmeMd }
);
export default TheArchive;
export { metadata };
