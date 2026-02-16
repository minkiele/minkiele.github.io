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
    `https://api.discogs.com/users/minkiele/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&page=${page}&sort=added&sort_order=desc#${process.env.NEXT_BUILD_TIMESTAMP}`
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

const URL_SCHEMA =
  /^https:\/\/i.discogs.com\/(.+?)\/rs:fit\/g:sm\/q:40\/h:150\/w:150\/(.+?)\/(.+?)\/(.+?)\/(.+?)\/(.+?)\.jpeg$/;

const compressUrl = (url: string, tokens: TokenStorage) => {
  const matches = url.match(URL_SCHEMA);
  return matches
    ? [`${matches[2]}/${matches[3]}`, matches[6]]
        .map(tokens.getToken.bind(tokens))
        .concat(matches[1], `${matches[4]}/${matches[5]}`)
        .join('$')
    : '';
};

const uncompressUrl = (url: string, storage: TokenStorage) => {
  const tokens = url.split('$');
  return `https://i.discogs.com/${
    tokens[2]
  }/rs:fit/g:sm/q:40/h:150/w:150/${storage.getString(tokens[0])}/${
    tokens[3]
  }/${storage.getString(tokens[1])}.jpeg`;
};

type Discography = ReturnType<typeof getDiscography> extends Promise<infer R>
  ? R
  : never;

const reverse = <T>(input: Array<T>) => [...input].reverse();

export type CompressedDiscography = Array<
  [number, string, string, string, string, number]
>;

const compressDiscography = (discography: Discography) => {
  const tokens = new TokenStorage();
  const compressedDiscography: CompressedDiscography = reverse(discography).map(
    ({ thumb, artist, id, medium, title, year }) => [
      id,
      artist,
      title,
      compressUrl(thumb, tokens),
      tokens.getToken(medium),
      year,
    ]
  );
  return { discography: compressedDiscography, tokens: tokens.getTokens() };
};

export const getCompressedDiscography = async () =>
  compressDiscography(await getDiscography());

export const uncompressDiscography = (
  discography: CompressedDiscography,
  storedTokens: Array<string>
) => {
  const tokens = new TokenStorage(storedTokens);
  const uncompressedDiscography = reverse(discography).map(
    ([id, artist, title, thumb, medium, year]) => {
      const record = { id, artist, title, thumb: null, medium: null, year };
      Object.defineProperty(record, 'thumb', {
        configurable: false,
        enumerable: true,
        get: () => uncompressUrl(thumb, tokens),
      });
      Object.defineProperty(record, 'medium', {
        configurable: false,
        enumerable: true,
        get: () => tokens.getString(medium),
      });
      return record;
    }
  );
  return uncompressedDiscography;
};
