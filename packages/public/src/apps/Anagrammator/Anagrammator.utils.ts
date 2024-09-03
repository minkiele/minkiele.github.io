import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnagrammatorWorkerResponse } from './Anagrammator.models';

export const useAnagrammatorWorker = () => {
  const worker = useRef<Worker>();

  useEffect(() => {
    if (worker.current == null) {
      worker.current = new Worker(new URL('./worker.ts', import.meta.url));
    }
    return () => {
      worker.current?.terminate();
      worker.current = undefined;
    };
  }, []);

  const [{ input, available, output }, setState] = useState<{
    input: string | undefined;
    available: boolean;
    output: Array<string>;
  }>({
    input: undefined,
    available: true,
    output: [],
  });

  useEffect(() => {
    if (input != null && !available) {
      const responseListener = (
        evt: MessageEvent<AnagrammatorWorkerResponse>
      ) => {
        if (
          evt.data.type === 'AnagrammatorWorkerResponse' &&
          evt.data.input === input
        ) {
          setState((current) => ({
            ...current,
            available: true,
            output: evt.data.output,
          }));
        }
      };
      worker.current?.addEventListener('message', responseListener);
      worker.current?.postMessage({
        type: 'AnagrammatorWorkerRequest',
        input: input,
      });
      return () => {
        worker.current?.removeEventListener('message', responseListener);
      };
    }
  }, [input, available]);

  const request = useCallback(
    (requestInput: string) => {
      if (requestInput !== input || available) {
        setState({
          input: requestInput,
          available: false,
          output: [],
        });
      }
    },
    [input, available]
  );

  return useMemo(
    () => ({
      request,
      input,
      output,
      available,
    }),
    [request, input, output, available]
  );
};
