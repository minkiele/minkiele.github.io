import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import ReadmeMd from '@/apps/Info/About';
const { metadata, App: About } = getAppAndMetadata('/about', {
  readme: ReadmeMd,
});

export default About;
export { metadata };
