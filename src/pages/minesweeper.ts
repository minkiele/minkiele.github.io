import Minesweeper from '@/apps/Minesweeper/Minesweeper';
import { getGetStaticProps } from '@/apps/App/App.utils';
export default Minesweeper;

export const getStaticProps = getGetStaticProps('/minesweeper');
