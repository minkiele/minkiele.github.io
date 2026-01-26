import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseJumpMatrix, { ReadmeMd } from '@/apps/JumpMatrix/JumpMatrix';
const { metadata, App: JumpMatrix } = getAppAndMetadata(
  '/jump-matrix',
  BaseJumpMatrix,
  { readme: ReadmeMd }
);
export default JumpMatrix;
export { metadata };
