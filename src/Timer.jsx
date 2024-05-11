import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { formatTimerNumber } from './utils';
import useInterval from './UseInterval';

Timer.propTypes = {
  focusTime: PropTypes.number,
  breakTime: PropTypes.number,
  mode: PropTypes.string,
  setMode: PropTypes.func,
};

export default function Timer({ focusTime, breakTime, mode, setMode }) {
  const [timeLeft, setTimeLeft] = useState(focusTime);
  const [isPaused, setIsPaused] = useState(true);

  const maxTime = mode === 'focus' ? focusTime : breakTime;
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
      setTimeLeft(maxTime);
    }

    setIsPaused((cur) => !cur);
  }

  function handleFocus() {
    setIsPaused(true);
    setMode('focus');
    setTimeLeft(focusTime);
  }

  function handleBreak() {
    setIsPaused(true);
    setMode('break');
    setTimeLeft(breakTime);
  }

  return (
    <div className="clock">
      <div className="clock__mode">
        <button
          onClick={handleFocus}
          className={`clock__mode__button ${
            mode === 'focus' ? 'selected' : ''
          }`}
        >
          Pomodoro
        </button>
        <button
          onClick={handleBreak}
          className={`clock__mode__button ${
            mode === 'break' ? 'selected' : ''
          }`}
        >
          Break
        </button>
      </div>
      <span className="clock__timer">
        {formatTimerNumber(minutes)}:{formatTimerNumber(seconds)}
      </span>

      <button
        onClick={handleToggleClock}
        className={`clock__toggle ${isPaused ? '' : 'clock__toggle-pause'}`}
      >
        {isPaused ? 'Start' : 'Pause'}
      </button>
    </div>
  );
}
