import { ComponentType, FC, PropsWithChildren, ReactNode } from 'react';
import { isVisibleChildren } from './App.utils';

const AppStructure: FC<
  PropsWithChildren<{
    readme: ComponentType;
  }>
> = ({ readme: ReadmeComponent, children }) => (
  <div>
    <div className="description">
      <ReadmeComponent />
    </div>
    {isVisibleChildren(children) && <div className="content">{children}</div>}
  </div>
);

export default AppStructure;
