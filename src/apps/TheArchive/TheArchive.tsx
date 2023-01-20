import { FunctionComponent } from 'react';
import { LazyRouteComponent } from '../App/App.models';
import Nav from '../App/Nav';
import TheArchiveMd from './README.md';

export interface TheArchiveProps extends LazyRouteComponent {
  components: Array<LazyRouteComponent>;
}

const TheArchive: FunctionComponent<TheArchiveProps> = ({ components }) => (
  <div>
    <TheArchiveMd />
    <div>
      <Nav menu={components} />
    </div>
  </div>
);

export default TheArchive;
