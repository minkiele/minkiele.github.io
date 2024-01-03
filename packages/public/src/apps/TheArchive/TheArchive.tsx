"use client"

import { FunctionComponent } from 'react';
import { LazyRouteComponent } from '../App/App.models';
import Nav from '../App/Nav';
import TheArchiveMd from './README.md';
import styles from './TheArchive.module.scss';
import { archivedLazyRouteComponents } from '../App/App';

export interface TheArchiveProps extends LazyRouteComponent {
  components: Array<LazyRouteComponent>;
}

const TheArchive: FunctionComponent = () => (
  <div>
    <TheArchiveMd />
    <div>
      <Nav menu={archivedLazyRouteComponents} className={styles.nav} skipToContent={false} />
    </div>
  </div>
);

export default TheArchive;
