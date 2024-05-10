import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { formatTimerNumber } from './utils';
import useInterval from './UseInterval';

export default function Timer({ focusTime }) {
  const [timeLeft, setTimeLeft] = useState(focusTime);
  const [isPaused, setIsPaused] = useState(true);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    document.title = `${formatTimerNumber(minutes)}:${formatTimerNumber(
      seconds
    )}`;
  }, [minutes, seconds]);

  useInterval(
    () => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    },
    1000,
    isPaused
  );

  // if timer hits 00:00, pause it
  useEffect(() => {
    if (seconds === 0 && minutes === 0) {
      setIsPaused(true);
    }
  }, [seconds, minutes]);

  function handleToggleClock() {
    // if start is clicked and timer is at 0, set timeLeft to max
    if (isPaused && timeLeft === 0) {
      setTimeLeft(focusTime);
    }

    setIsPaused((cur) => !cur);
  }

  function handleReset() {
    setIsPaused(true);
    setTimeLeft(focusTime);
  }

  return (
    <div className="clock">
      <span className="clock__timer">
        {formatTimerNumber(minutes)}:{formatTimerNumber(seconds)}
      </span>
      <div className="clock__buttons">
        <button onClick={handleToggleClock} className="clock__toggle">
          {isPaused ? 'Start' : 'Pause'}
        </button>
        <button onClick={handleReset} className="clock__reset">
          Reset
        </button>
      </div>
    </div>
  );
}
