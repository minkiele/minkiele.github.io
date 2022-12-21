import { lazy } from "react";

export interface LazyRouteComponent {
    route: string;
    name: string;
    component: ReturnType<typeof lazy>;
    setTitle?: boolean;
    archived?: boolean;
  }
