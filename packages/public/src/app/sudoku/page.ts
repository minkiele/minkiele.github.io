import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseSudokuUI from '@/apps/SudokuUI/SudokuUI';
const { metadata, App: SudokuUI } = getAppAndMetadata('/sudoku', BaseSudokuUI);
export default SudokuUI;
export { metadata };
