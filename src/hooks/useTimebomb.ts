import { useCallback, useEffect, useRef, useState } from "react";

interface UseTimebombProps {
  callback: () => void;
  autostart?: boolean;
  timeout: number;
}

const useTimebomb = ({
  callback,
  timeout,
  autostart = false,
}: UseTimebombProps) => {
  const timerId = useRef<ReturnType<typeof setTimeout>>();
  const [timebombState, setTimebombState] = useState<
    "idle" | "countdown" | "defuse"
  >("idle");

  const start = useCallback(() => {
    setTimebombState("countdown");
    timerId.current = setTimeout(() => {
      setTimebombState("defuse");
    }, timeout);
  }, [timeout]);

  useEffect(() => {
    if (timebombState === "defuse") {
      callback();
    }
  }, [callback, timebombState]);

  useEffect(() => {
    if (autostart && timebombState === "idle") {
      start();
    }
  }, [autostart, start, timebombState]);

  return start;
};

export default useTimebomb;
