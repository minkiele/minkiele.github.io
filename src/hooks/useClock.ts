import dayjs, { Dayjs } from "dayjs";
import {
  useEffect,
  useMemo,
  useReducer,
} from "react";

export interface ClockCommands {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

interface ElapsedReducerState {
  started: Dayjs | null;
  current: Dayjs | null;
  elapsed: number;
}

type ElapsedReducerAction = "start" | "stop" | "update" | "reset";

const useClock = (): ClockCommands & ElapsedReducerState => {
  const [timeStatus, setTimeStatus] = useReducer(
    (state: ElapsedReducerState, action: ElapsedReducerAction) => {
      switch (action) {
        case "start": {
          if (state.started == null) {
            const now = dayjs();
            return { started: now, current: now, elapsed: 0 };
          } else {
            return state;
          }
        }
        case "stop": {
          return { ...state, started: null, current: null };
        }
        case "reset": {
          return { started: null, current: null, elapsed: 0 };
        }
        default:
          const now = dayjs();
          return {
            ...state,
            current: now,
            elapsed: state.current?.diff(state.started, "s") ?? 0,
          };
      }
    },
    {
      started: null,
      current: null,
      elapsed: 0,
    }
  );

  const commands = useMemo(
    () => ({
      start: () => setTimeStatus("start"),
      stop: () => setTimeStatus("stop"),
      reset: () => setTimeStatus("reset"),
    }),
    []
  );

  useEffect(() => {
    if (timeStatus.started != null) {
      const timerId = setInterval(() => {
        setTimeStatus("update");
      }, 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
    return undefined;
  }, [timeStatus.started]);

  return useMemo(() => ({ ...timeStatus, ...commands }), [commands, timeStatus]);
};

export default useClock;
