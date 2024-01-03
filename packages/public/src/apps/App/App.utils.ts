import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { allLazyRouteComponents } from "./App";
import { LazyRouteComponent } from "./App.models";
import { pageview } from "./App.common-analytics";

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

export { pageview, event } from "./App.common-analytics";

export const useGoogleAnalyticsPageviews = () => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    }
  }, [router.events]);
}

export { isNullOrEmpty } from "@/lib/utils";

export const EMPTY_PAGE: NextPage = () => null;

export const getRedirect = (to: string | URL): NextPage => () => {
  const { replace } = useRouter();
  useEffect(() => {
    replace(to);
  }, [replace]);
  return null;
}
