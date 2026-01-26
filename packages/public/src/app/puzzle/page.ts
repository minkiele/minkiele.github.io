import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BasePuzzle, { ReadmeMd } from '@/apps/Puzzle/Puzzle';
const { metadata, App: Puzzle } = getAppAndMetadata('/puzzle', BasePuzzle, {
  readme: ReadmeMd,
});
export default Puzzle;
export { metadata };
