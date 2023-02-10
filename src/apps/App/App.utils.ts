import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
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

export const pageview = (url: string) => {
  (window as any).gtag('config', process.env.NEXT_PUBLIC_ANALYTICS_ID, {
    page_path: url
  });
}

export const event = ({ action, category, label, value }: { action: string, category?: string, label?: string, value?: number }) => {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

export const useGoogleAnalyticsPageviews = () => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    }
  }, [router.events]);
}
