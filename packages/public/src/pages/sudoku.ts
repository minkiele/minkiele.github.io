import SudokuUI from '@/apps/SudokuUI/SudokuUI';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default SudokuUI;

export const getStaticProps = getGetStaticProps('/sudoku');
