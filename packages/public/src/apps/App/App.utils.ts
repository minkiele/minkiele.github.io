import { LazyRouteComponent } from "./App.models";

export const sortRoutes = (a: LazyRouteComponent, b: LazyRouteComponent): number => {
    if(a.order == null && b.order == null) {
      return 0;
    } else if(a.order == null) {
      return -1;
    } else if(b.order == null) {
      return 1;
    } else {
      return a.order - b.order;
    }
  }
