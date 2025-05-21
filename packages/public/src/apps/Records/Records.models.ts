export interface DiscogsPagination {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: Partial<Record<'first' | 'prev' | 'next' | 'last', string>>;
}

export interface DiscogsPaginatedResponse {
  pagination: DiscogsPagination;
}

export interface DiscogsCollectionItemsByFolder
  extends DiscogsPaginatedResponse {
  releases: Array<DiscogsRelease>;
}

export interface DiscogsRelease {
  id: number;
  instance_id: number;
  folder_id: number;
  rating: number;
  date_added: string;
  basic_information: DiscogsReleaseBasicInformation;
}

export interface DiscogsReleaseBasicInformation {
  id: number;
  master_id?: string;
  master_url?: string;
  title: string;
  year: number;
  resource_url: string;
  thumb: string;
  cover_image: string;
  formats: Array<DiscogsFormat>;
  labels: Array<DiscogsLabel>;
  artists: Array<DiscogsArtist>;
  genres: Array<string>;
  styles: Array<string>;
  notes: Array<DiscogsField>;
}

export interface DiscogsFormat {
  qty: number;
  descriptions: Array<string>;
  name: string;
  text?: string;
}

export interface DiscogsLabel {
  resource_url: string;
  entity_type: string;
  catno: string;
  id: number;
  name: string;
}

export interface DiscogsArtist {
  id: number;
  name: string;
  join: string;
  resource_url: string;
  anv: string;
  tracks: string;
  role: string;
}

export interface DiscogsField {
  field_id: number;
  value: string;
}
