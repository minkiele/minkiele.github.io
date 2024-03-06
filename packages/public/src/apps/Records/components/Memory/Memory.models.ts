import { RecordDataSource, RecordDataSources } from "../../Records.models";

export interface MemoryReducerState {
  cards: RecordDataSources;
  matched: Array<RecordDataSource['id']>;
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
  deck: RecordDataSources;
}

export interface MemoryConfig {
  size?: number;
  left?: number;
  wait?: number;
  redeem?: boolean;
}
