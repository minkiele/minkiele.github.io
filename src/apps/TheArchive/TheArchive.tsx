import { FunctionComponent } from 'react';
import { LazyRouteComponent } from '../../App.models';
import Nav from '../../Nav';
import TheArchiveMd from './README.md';
import './TheArchive.scss';

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
