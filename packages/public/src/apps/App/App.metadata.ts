import { Metadata } from "next";
import { allLazyRouteComponents } from "./App";

export const getMetadata = (
    route: string,
    meta?: Partial<Metadata>
  ): Metadata => {
    const props = allLazyRouteComponents.find(
      (lazyRouteComponent) => lazyRouteComponent.route === route
    );
    if (props == null) {
      throw new Error("Route not found");
    }
    return {
      ...(props.setTitle && { title: props.name }),
      ...meta,
    }
  };

  export const getPageName = (route: string): string | undefined => {
    return allLazyRouteComponents.find(
      (lazyRouteComponent) => lazyRouteComponent.route === route
    )?.name
  }
