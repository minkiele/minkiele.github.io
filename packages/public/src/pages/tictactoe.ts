import TicTacToe from '@/apps/TicTacToe/TicTacToe';
import { getGetStaticProps } from '@/apps/App/App.utils';

export default TicTacToe;

export const getStaticProps = getGetStaticProps('/tictactoe');
