import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BasePuzzle from '@/apps/Puzzle/Puzzle';
const { metadata, App: Puzzle } = getAppAndMetadata('/puzzle', BasePuzzle);
export default Puzzle;
export { metadata };
