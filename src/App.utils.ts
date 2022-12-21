import { thunkify } from "ramda";
import { useCallback, useEffect, useMemo, useState } from "react";
import { LazyRouteComponent, Menu, Submenu } from "./App.models";

export const flattenMenu = <L>(menu: Menu<L>): Array<LazyRouteComponent<L>> =>
  menu.reduce<Array<LazyRouteComponent<L>>>(
    (flattened, menuElement) => [
      ...flattened,
      ...((menuElement as LazyRouteComponent<L>).route != null
        ? [menuElement as LazyRouteComponent<L>]
        : flattenMenu((menuElement as Submenu<L>).components)),
    ],
    []
  );

export const useTrackMenu = <L>(menu: Menu<L>) => {
  const [expanded, setExpanded] = useState<Array<string>>([]);
  const toggleExpanded = useCallback((id: string) => {
    setExpanded((currentExpanded) => {
      const idIndex = currentExpanded.indexOf(id);
      if (idIndex > -1) {
        return [
          ...currentExpanded.slice(0, idIndex),
          ...currentExpanded.slice(idIndex + 1),
        ];
      } else {
        return [...currentExpanded, id];
      }
    });
  }, []);
  // Reset expansion ids when menu changes
  useEffect(() => {
    setExpanded([]);
  }, [menu]);
  return useMemo(
    () => ({ expanded, toggleExpanded }),
    [expanded, toggleExpanded]
  );
};
