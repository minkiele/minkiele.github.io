import BaseTheArchive from '@/apps/TheArchive/TheArchive';
import { getAppAndMetadata } from '@/apps/App/AppWrapper';
const { metadata, App: TheArchive } = getAppAndMetadata(
  '/archive',
  BaseTheArchive
);
export default TheArchive;
export { metadata };
