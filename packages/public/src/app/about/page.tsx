import { getAppAndMetadata } from '@/apps/App/AppWrapper';
import BaseAbout from '@/apps/Info/About';
const { metadata, App: About } = getAppAndMetadata('/about', BaseAbout);

export default About;
export { metadata };
