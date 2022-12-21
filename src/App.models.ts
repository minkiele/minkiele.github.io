export interface LazyRouteComponent<L> {
  route: string;
  name: string;
  component: L;
  setTitle?: boolean;
}

export interface Submenu<L> {
  id: string;
  name: string;
  components: Menu<L>;
}

export type Menu<L> = Array<LazyRouteComponent<L> | Submenu<L>>;

export interface MenuProps<L> {
  menu: Menu<L>;
  expanded: Array<string>;
  toggleExpanded: (id: string) => void;
}
