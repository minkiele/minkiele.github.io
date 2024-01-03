import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseMinesweeper from '@/apps/Minesweeper/Minesweeper';
const { metadata, App: Minesweeper } = getAppAndMetadata('/minesweeper', BaseMinesweeper);
export default Minesweeper;
export { metadata };
