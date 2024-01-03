import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseTicTacToe from '@/apps/TicTacToe/TicTacToe';
const { metadata, App: TicTacToe } = getAppAndMetadata('/tictactoe', BaseTicTacToe);
export default TicTacToe;
export { metadata };
