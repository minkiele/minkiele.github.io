declare module NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_DEFAULT_THEME: string;
    readonly DISCOGS_CACHEBUSTER: string;
    readonly DISCOGS_TOKEN?: string;
    readonly NEXT_PUBLIC_ANALYTICS_ID?: string;
    readonly NEXT_PUBLIC_GTM_ID?: string;
    // This exists only at build time so it is marked optional
    readonly NEXT_BUILD_TIMESTAMP?: string;
  }
}
