import { RecordDataSource, RecordDataSources } from '../../Records.models';

export interface GuessProps {
  deck: RecordDataSources;
}

export interface UseGuessOptions {
  rounds: number;
  guesses: number;
  countdown: number;
}

export interface UseGuessState {
  options: UseGuessOptions;
  rounds: RecordDataSources;
  round: number;
  guesses: RecordDataSources;
  guessed: RecordDataSources;
  errors: RecordDataSources;
  current: RecordDataSource | undefined;
}

export type UseGuessAction =
  | {
      type: 'new';
      options: UseGuessOptions;
    }
  | {
      type: 'restart' | 'next' | 'reset';
    }
  | {
      type: 'guess';
      id: RecordDataSource['id'];
    };
