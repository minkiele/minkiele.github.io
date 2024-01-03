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

export const getAppAndMetadata = (
  route: string,
  App: FunctionComponent
): { metadata: Metadata; App: FunctionComponent } => ({
  metadata: getMetadata(route),
  App: () => createElement(AppWrapper, { route }, createElement(App)),
});

export default AppWrapper;
