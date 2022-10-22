import { PropsWithChildren } from "react";
import { HashRouter } from "react-router-dom";

const Router = ({
  children,
}: PropsWithChildren<Record<never, unknown>>): JSX.Element => (
  <HashRouter window={window}>{children}</HashRouter>
);

export default Router;
