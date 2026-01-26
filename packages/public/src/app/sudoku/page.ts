import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseSudokuUI, { ReadmeMd } from '@/apps/SudokuUI/SudokuUI';
const { metadata, App: SudokuUI } = getAppAndMetadata('/sudoku', BaseSudokuUI, {
  readme: ReadmeMd,
});
export default SudokuUI;
export { metadata };
