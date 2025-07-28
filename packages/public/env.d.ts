declare module NodeJS {
  interface ProcessEnv {
    // set to dark to see dark theme by default (already in .env)
    readonly NEXT_PUBLIC_DEFAULT_THEME: string;
    // set to a timestamp to invalidate `nx's` cache if you only want to update the records list
    readonly DISCOGS_CACHEBUSTER?: string;
    // set to a discogs token to download the discography. save it into .env.production.local which is ignored by git
    readonly DISCOGS_TOKEN?: string;
    // set to an analytics property id for stats. save it into .env.local to get also development stats
    readonly NEXT_PUBLIC_ANALYTICS_ID?: string;
    // set to a tag manager id for other logic I can't remember
    readonly NEXT_PUBLIC_GTM_ID?: string;
    // This exists only at build time so it is marked optional
    readonly NEXT_BUILD_TIMESTAMP?: string;
  }
}
