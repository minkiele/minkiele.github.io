import {
  type ComponentType,
  type FunctionComponent,
  type ReactNode,
  createElement,
} from 'react';
import { getMetadata, getPageName } from './App.metadata';
import type { Metadata } from 'next';
import { isVisibleChildren } from './App.utils';

interface AppWrapperProps {
  route: string;
  readme?: ComponentType;
  children?: ReactNode;
}

const AppWrapper: FunctionComponent<AppWrapperProps> = ({
  route,
  readme: ReadmeComponent,
  children,
}) => {
  const pageName = getPageName(route);
  return (
    <>
      <h1>{pageName}</h1>
      {ReadmeComponent != null && (
        <div className="readme">
          <ReadmeComponent />
        </div>
      )}
      {isVisibleChildren(children) && <div className="content">{children}</div>}
    </>
  );
};

export const getAppAndMetadata = <P extends {}>(
  route: string,
  App: FunctionComponent<P>,
  options?: {
    isAsync?: boolean;
    readme?: ComponentType;
  }
): { metadata: Metadata; App: FunctionComponent<P> } => {
  const isAsync = options?.isAsync ?? false;
  const readme = options?.readme;
  return {
    metadata: getMetadata(route),
    App: async function InternalAppWrapper(props: P) {
      const appChild = createElement(App, isAsync ? { ...props } : undefined);
      return (
        <AppWrapper route={route} readme={readme}>
          {appChild}
        </AppWrapper>
      );
    },
  };
};

export default AppWrapper;
