import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseMinesweeper, { ReadmeMd } from '@/apps/Minesweeper/Minesweeper';
const { metadata, App: Minesweeper } = getAppAndMetadata(
  '/minesweeper',
  BaseMinesweeper,
  { readme: ReadmeMd }
);
export default Minesweeper;
export { metadata };
