import {
  DiscogsCollectionItemsByFolder,
  DiscogsRelease,
} from './Records.models';
import { join, map, pipe, prop, replace } from 'ramda';

const getArtistName = pipe(
  map(pipe(prop('name'), replace(/\s*\(\d+\)$/, ''))),
  join(', ')
);

const getMedium = pipe(map(prop('name')), join(', '));

const fetchDiscographyPage = async (page: number) => {
  const myDiscogsRequest = await fetch(
    `https://api.discogs.com/users/minkiele/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&page=${page}&sort=added&sort_order=desc#${process.env.DISCOGS_TIMESTAMP}`
  );
  if (!myDiscogsRequest.ok) {
    throw new Error('Cannot download Discogs releases');
  }
  const myDiscogsResponse: DiscogsCollectionItemsByFolder =
    await myDiscogsRequest.json();

  return myDiscogsResponse;
};

const fetchDiscography = async () => {
  let complete = false;
  let currentPage = 1;
  let releases: Array<DiscogsRelease> = [];
  let retries = 0;
  while (!complete) {
    try {
      const page = await fetchDiscographyPage(currentPage);
      releases.push(...page.releases);
      if (page.pagination.page === page.pagination.pages) {
        complete = true;
      }
      currentPage += 1;
      retries = 0;
    } catch (exc) {
      if (retries < 3) {
        retries += 1;
      } else {
        throw new Error(`Cannot fetch page ${currentPage}`);
      }
    }
  }
  return releases;
};

export const getDiscography = async () => {
  const releases = await fetchDiscography();

  return releases.map((release) => ({
    id: release.id,
    artist: getArtistName(release.basic_information.artists),
    title: release.basic_information.title,
    thumb: release.basic_information.thumb,
    medium: getMedium(release.basic_information.formats),
    year: release.basic_information.year,
  }));
};

class TokenStorage {
  private static BASE = 36;
  public constructor(private tokens: Array<string> = []) {}
  public getToken(input: string) {
    if (input.length > 0) {
      const index = this.tokens.indexOf(input);
      if (index >= 0) {
        return index.toString(TokenStorage.BASE);
      } else {
        this.tokens.push(input);
        return (this.tokens.length - 1).toString(TokenStorage.BASE);
      }
    }
    return input;
  }
  public getString(token: string) {
    if (token.length > 0) {
      const index = parseInt(token, TokenStorage.BASE);
      if (!isNaN(index)) {
        const output = this.tokens[index];
        if (output != null) {
          return output;
        }
      }
    }
    return '';
  }
  public getTokens() {
    return this.tokens;
  }
}

const compressUrl = (url: string, tokens: TokenStorage) =>
  url
    .split('/')
    .map((src) => tokens.getToken(src))
    .join('/');
const uncompressUrl = (url: string, tokens: TokenStorage) =>
  url
    .split('/')
    .map((src) => tokens.getString(src))
    .join('/');

type Discography = ReturnType<typeof getDiscography> extends Promise<infer R>
  ? R
  : never;

const compressDiscography = (discography: Discography) => {
  const tokens = new TokenStorage();
  const compressedDiscography = discography.map(({ thumb, ...record }) => ({
    ...record,
    thumb: compressUrl(thumb, tokens),
  }));
  return { discography: compressedDiscography, tokens: tokens.getTokens() };
};

export const getCompressedDiscography = async () =>
  compressDiscography(await getDiscography());

export const uncompressDiscography = (
  discography: Discography,
  storedTokens: Array<string>
) => {
  const tokens = new TokenStorage(storedTokens);
  const uncompressedDiscography = discography.map(({ thumb, ...record }) => {
    Object.defineProperty(record, 'thumb', {
      configurable: false,
      enumerable: true,
      get: () => uncompressUrl(thumb, tokens),
    });
    return record;
  });
  return uncompressedDiscography;
};
