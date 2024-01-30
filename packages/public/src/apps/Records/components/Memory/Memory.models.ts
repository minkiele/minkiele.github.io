export interface MemoryDataSource {
  id: number;
  artist: string;
  title: string;
  thumb: string;
  medium: string;
}

export type MemoryDataSources = Array<MemoryDataSource>;

export interface MemoryReducerState {
  cards: MemoryDataSources;
  matched: Array<MemoryDataSource['id']>;
  flipped: Array<number>;
  status: symbol; // Hehe
  left: number;
}

export type MemoryReducerAction =
  | {
      type: 'reset';
      cards: MemoryDataSources;
    }
  | {
      type: 'flip';
      index: number;
    }
  | {
      type: 'cover';
    };

export interface MemoryProps {
  source: MemoryDataSources;
}
