import BaseAnagrammator from '@/apps/Anagrammator/Anagrammator';
import { getAppAndMetadata } from '@/apps/App/AppWrapper';

const { metadata, App: Anagrammator } = getAppAndMetadata('/anagrammator', BaseAnagrammator);

export default Anagrammator;

export { metadata };
