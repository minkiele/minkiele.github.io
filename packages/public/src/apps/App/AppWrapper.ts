import {
  ComponentType,
  Fragment,
  FunctionComponent,
  ReactNode,
  createElement,
} from 'react';
import { getMetadata, getPageName } from './App.metadata';
import { Metadata } from 'next';
import AppStructure from './AppStructure';

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
      return createElement(
        AppWrapper,
        { route },
        readme == null
          ? appChild
          : createElement(AppStructure, { readme }, appChild)
      );
    },
  };
};

export default AppWrapper;
