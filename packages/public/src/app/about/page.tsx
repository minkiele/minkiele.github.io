import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseAbout, { ReadmeMd } from '@/apps/Info/About';
const { metadata, App: About } = getAppAndMetadata('/about', BaseAbout, {
  readme: ReadmeMd,
});

export default About;
export { metadata };
