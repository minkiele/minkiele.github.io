'use client';

import { FunctionComponent } from 'react';
import { LazyRouteComponent } from '../App/App.models';
import Nav from '../App/Nav';
export { default as ReadmeMd } from './README.md';
import styles from './TheArchive.module.scss';
import { archivedLazyRouteComponents } from '../App/App';

export interface TheArchiveProps extends LazyRouteComponent {
  components: Array<LazyRouteComponent>;
}

const TheArchive: FunctionComponent = () => (
  <Nav
    menu={archivedLazyRouteComponents}
    className={styles.nav}
    skipToContent={false}
  />
);

export default TheArchive;
