import { FunctionComponent, lazy } from 'react';

export interface LazyRouteComponent {
  route: string;
  name: string;
  setTitle?: boolean;
  archived?: boolean;
  prefetch?: boolean;
  order?: number;
}
