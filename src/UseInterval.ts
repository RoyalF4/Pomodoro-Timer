import { useEffect, useRef } from 'react';

export default function useInterval(
  callback: Function,
  interval: number,
  isPaused: boolean
) {
  const savedCallback = useRef<Function | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (interval && !isPaused) {
      let id = setInterval(() => {
        savedCallback.current?.();
      }, interval);
      return () => clearInterval(id);
    }
  }, [interval, isPaused]);
}
