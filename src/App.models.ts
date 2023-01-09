import { FunctionComponent, lazy } from 'react';

export interface LazyRouteComponent {
  route: string;
  name: string;
  component: ReturnType<typeof lazy> | FunctionComponent<any>;
  setTitle?: boolean;
  archived?: boolean;
}
