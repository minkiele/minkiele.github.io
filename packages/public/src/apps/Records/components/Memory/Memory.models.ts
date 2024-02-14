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
  wait: number;
  redeem: boolean;
}

type MemoryResetAction = Pick<
  MemoryReducerState,
  'cards' | 'left' | 'wait' | 'redeem'
>;

export type MemoryReducerAction =
  | ({
      type: 'reset';
    } & MemoryResetAction)
  | {
      type: 'flip';
      index: number;
    }
  | {
      type: 'cover';
    };

export interface MemoryProps {
  deck: MemoryDataSources;
}

export interface MemoryConfig {
  size?: number;
  left?: number;
  wait?: number;
  redeem?: boolean;
}
