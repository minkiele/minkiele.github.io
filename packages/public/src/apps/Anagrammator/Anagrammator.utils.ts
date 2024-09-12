import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  AnagrammatorWorkerRequest,
  AnagrammatorWorkerResponse,
} from './Anagrammator.models';

interface AnagrammatorWorkerState {
  id: string | undefined;
  input: string | undefined;
  idle: boolean;
  anagramms: Array<string>;
}

export const useAnagrammatorWorker = () => {
  const ref = useRef<Worker>();
  const [{ id, input, idle, anagramms }, setWorkerState] =
    useState<AnagrammatorWorkerState>({
      id: undefined,
      input: undefined,
      idle: true,
      anagramms: [],
    });
  useEffect(() => {
    let worker = ref.current;
    if (worker == null) {
      worker = new Worker(new URL('./worker.ts', import.meta.url));
      ref.current = worker;
    }
    const anagrammatorWorkerListener = (
      evt: MessageEvent<AnagrammatorWorkerResponse>
    ) => {
      if (evt.data.type === 'anagrammatorWorkerResponse') {
        setWorkerState((current) => {
          if (current.id === evt.data.id && !current.idle) {
            return { ...current, id: undefined, idle: true, anagramms: evt.data.anagramms };
          }
          return current;
        });
      }
    };
    worker.addEventListener('message', anagrammatorWorkerListener);
    return () => {
      if (worker != null) {
        worker.removeEventListener('message', anagrammatorWorkerListener);
        worker.terminate();
        ref.current = undefined;
      }
    };
  }, []);
  const anagramm = useCallback((input: string) => {
    setWorkerState((current) => {
      if (current.idle) {
        return { id: uuid(), input, idle: true, anagramms: [] };
      }
      return current;
    });
  }, []);

  useEffect(() => {
    if (idle && id != null && input != null) {
      const payload: AnagrammatorWorkerRequest = {
        id,
        type: 'anagrammatorWorkerRequest',
        input,
      };
      setWorkerState((current) => ({
        ...current,
        idle: false,
      }));
      ref.current?.postMessage(payload);
    }
  }, [id, idle, input]);

  return useMemo(
    () => ({
      anagramm,
      input,
      anagramms,
      idle,
    }),
    [anagramm, input, anagramms, idle]
  );
};
