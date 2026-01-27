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
  options?: {
    app?: FunctionComponent<P>;
    isAsync?: boolean;
    readme?: ComponentType;
  }
): { metadata: Metadata; App: FunctionComponent<P> } => {
  const isAsync = options?.isAsync ?? false;
  const readme = options?.readme;
  const App = options?.app;
  return {
    metadata: getMetadata(route),
    App: async function InternalAppWrapper(props: P) {
      return (
        <AppWrapper route={route} readme={readme}>
          {App == null
            ? null
            : createElement(App, isAsync ? { ...props } : null)}
        </AppWrapper>
      );
    },
  };
};

export default AppWrapper;
