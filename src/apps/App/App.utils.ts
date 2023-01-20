import { GetStaticProps } from "next";
import { allLazyRouteComponents } from "./App";
import { LazyRouteComponent } from "./App.models";

export const getGetStaticProps = <L extends LazyRouteComponent>(
  route: string,
  staticProps?: Partial<L>
): GetStaticProps<LazyRouteComponent> => {
  const props = allLazyRouteComponents.find(
    (lazyRouteComponent) => lazyRouteComponent.route === route
  );
  if (props == null) {
    throw new Error("Route not found");
  }
  return () => ({
    props: { ...props, ...staticProps }
  });
};
