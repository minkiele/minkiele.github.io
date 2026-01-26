import BaseAnagrammator, { ReadmeMd } from '@/apps/Anagrammator/Anagrammator';
import { getAppAndMetadata } from '@/apps/App/AppWrapper';

const { metadata, App: Anagrammator } = getAppAndMetadata(
  '/anagrammator',
  BaseAnagrammator,
  { readme: ReadmeMd }
);

export default Anagrammator;

export { metadata };
