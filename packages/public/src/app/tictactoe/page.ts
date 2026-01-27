import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseTicTacToe, { ReadmeMd } from '@/apps/TicTacToe/TicTacToe';
const { metadata, App: TicTacToe } = getAppAndMetadata('/tictactoe', {
  app: BaseTicTacToe,
  readme: ReadmeMd,
});
export default TicTacToe;
export { metadata };
