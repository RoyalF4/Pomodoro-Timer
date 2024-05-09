import { useEffect, useRef } from 'react';

export default function useInterval(callback, interval, isPaused) {
  const savedCallback = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (interval && !isPaused) {
      let id = setInterval(() => {
        savedCallback.current();
      }, interval);
      return () => clearInterval(id);
    }
  }, [interval, isPaused]);
}
