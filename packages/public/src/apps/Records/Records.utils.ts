import { DiscogsCollectionItemsByFolder } from './Records.models';
import { join, map, pipe, prop, replace } from 'ramda';

const getArtistName = pipe(
  map(pipe(prop('name'), replace(/\s*\(\d+\)$/, ''))),
  join(', ')
);

const getMedium = pipe(map(prop('name')), join(', '));

export const getDiscography = async () => {
  const myDiscogsRequest = await fetch(
    `https://api.discogs.com/users/minkiele/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&page=1&per_page=${process.env.DISCOGS_ITEMS}&sort=added&sort_order=desc`
  );
  if (!myDiscogsRequest.ok) {
    throw new Error('Cannot download Discogs releases');
  }
  const myDiscogsResponse: DiscogsCollectionItemsByFolder =
    await myDiscogsRequest.json();

  return myDiscogsResponse.releases.map((release) => ({
    id: release.id,
    artist: getArtistName(release.basic_information.artists),
    title: release.basic_information.title,
    thumb: release.basic_information.thumb,
    medium: getMedium(release.basic_information.formats),
  }));
};
