import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseJumpMatrix from '@/apps/JumpMatrix/JumpMatrix';
const { metadata, App: JumpMatrix } = getAppAndMetadata('/jump-matrix', BaseJumpMatrix);
export default JumpMatrix;
export { metadata };
