import { Fragment, FunctionComponent, ReactNode, createElement } from 'react';
import { getMetadata, getPageName } from './App.metadata';
import { Metadata } from 'next';

interface AppWrapperProps {
  route: string;
  children?: ReactNode;
}

const AppWrapper: FunctionComponent<AppWrapperProps> = ({
  route,
  children,
}) => {
  const pageName = getPageName(route);

  return createElement(
    Fragment,
    undefined,
    createElement('h1', undefined, pageName),
    children
  );
};

export const getAppAndMetadata = <P extends {}>(
  route: string,
  App: FunctionComponent<P>
): { metadata: Metadata; App: FunctionComponent<P> } => ({
  metadata: getMetadata(route),
  App: async function InternalAppWrapper(props: P) {
    return createElement(
      AppWrapper,
      { route },
      createElement(App, { ...props })
    );
  },
});

export default AppWrapper;
