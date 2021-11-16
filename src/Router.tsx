import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

const Router = ({
  children,
}: PropsWithChildren<Record<never, unknown>>): JSX.Element => (
  <BrowserRouter window={window}>{children}</BrowserRouter>
);

export default Router;
