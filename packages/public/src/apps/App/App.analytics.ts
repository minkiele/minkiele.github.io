"use client"

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const pageview = (url: string) => {
  (window as any).gtag?.('config', process.env.NEXT_PUBLIC_ANALYTICS_ID, {
    page_path: url
  });
}

export const event = ({ action, category, label, value }: { action: string, category?: string, label?: string, value?: number }) => {
  (window as any)?.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

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
