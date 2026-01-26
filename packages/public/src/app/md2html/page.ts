import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseMd2Html, { ReadmeMd } from '@/apps/Md2Html/Md2Html';
const { metadata, App: Md2Html } = getAppAndMetadata('/md2html', BaseMd2Html, {
  readme: ReadmeMd,
});
export default Md2Html;
export { metadata };
