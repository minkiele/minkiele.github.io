import anagrammator from 'anagrammator';
import { AnagrammatorWorkerRequest } from './Anagrammator.models';

export const ctx = self as unknown as Worker;

ctx.addEventListener(
  'message',
  (evt: MessageEvent<AnagrammatorWorkerRequest>) => {
    if (evt.data.type === 'AnagrammatorWorkerRequest') {
      new Promise<Array<string>>((resolve) => {
        resolve(anagrammator(evt.data.input));
      }).then((output) => {
        ctx.postMessage({
            type: 'AnagrammatorWorkerResponse',
            input: evt.data.input,
            output
        });
      });
    }
  }
);
