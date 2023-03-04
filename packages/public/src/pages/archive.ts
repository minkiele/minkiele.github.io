import TheArchive, { TheArchiveProps } from '@/apps/TheArchive/TheArchive';
import { getGetStaticProps } from '@/apps/App/App.utils';
import { archivedLazyRouteComponents } from '@/apps/App/App';
export default TheArchive;

export const getStaticProps = getGetStaticProps<TheArchiveProps>('/archive', { components: archivedLazyRouteComponents });
