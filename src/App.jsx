import { useEffect, useState, useRef } from 'react';
import { formatTimerNumber } from './utils';
import useInterval from './UseInterval';

const START_TIME = 25 * 60;

export default function App() {
  const [timeLeft, setTimeLeft] = useState(START_TIME);
  const [isPaused, setIsPaused] = useState(true);

  useInterval(
    () => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    },
    1000,
    isPaused
  );

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // useEffect(() => {
  //   if (seconds === 0 && minutes === 0) {
  //     setIsPaused(true);
  //     clearInterval(intervalRef.current);
  //   }
  // }, [seconds, minutes]);

  // useEffect(() => {
  //   if (!isPaused) {
  //     intervalRef.current = setInterval(() => {
  //       setTimeLeft((timeLeft) => timeLeft - 1);
  //     }, 1000);
  //   }

  //   return () => clearInterval(intervalRef.current);
  // }, [isPaused, setTimeLeft]);

  function handleToggleClock() {
    // if (isPaused && timeLeft === 0) {
    //   setTimeLeft(START_TIME);
    // }
    setIsPaused((cur) => !cur);
  }

  function handleReset() {
    setIsPaused(true);
    setTimeLeft(25 * 60);
  }

  return (
    <main>
      <span>
        {formatTimerNumber(minutes)}:{formatTimerNumber(seconds)}
      </span>
      <button onClick={handleToggleClock}>
        {isPaused ? 'Start' : 'Pause'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </main>
  );
}
