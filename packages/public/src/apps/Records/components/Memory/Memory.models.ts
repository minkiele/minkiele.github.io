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

export interface MemoryProps {
  deck: MemoryDataSources;
}

export interface MemoryConfig {
  size?: number;
  left?: number;
  wait?: number;
  redeem?: boolean;
}

export interface MemoryStoreAction {
  reset: (params: MemoryResetAction) => void;
  flip: (params: { index: number }) => void;
  cover: () => void;
}

export type MemoryStoreState = MemoryReducerState & MemoryStoreAction;
