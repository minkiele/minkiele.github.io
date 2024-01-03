import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "./App.common-analytics";

export { pageview, event } from "./App.common-analytics";

export const useGoogleAnalyticsPageviews = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    pageview(`${pathname}?${searchParams}`);
  }, [pathname, searchParams]);
}

export function UseGoogleAnalyticsPageviews() {
  useGoogleAnalyticsPageviews();
  return null;
}
