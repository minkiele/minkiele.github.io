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
      if(retries < 3) {
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
  }));
};
