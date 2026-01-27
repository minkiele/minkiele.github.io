import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseJumpMatrix, { ReadmeMd } from '@/apps/JumpMatrix/JumpMatrix';
const { metadata, App: JumpMatrix } = getAppAndMetadata('/jump-matrix', {
  app: BaseJumpMatrix,
  readme: ReadmeMd,
});
export default JumpMatrix;
export { metadata };
