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
