import { useState } from 'react';
import Timer from './Timer';
import TaskList from './TaskList';

const FOCUS_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

export default function App() {
  const [mode, setMode] = useState('focus');
  return (
    <main className="main">
      <Timer
        focusTime={FOCUS_TIME}
        breakTime={BREAK_TIME}
        mode={mode}
        setMode={setMode}
      />
      <span className="block text-center mb-4">
        {mode === 'focus' ? 'Time to focus!' : 'Time for a break!'}
      </span>
      <TaskList />
    </main>
  );
}

// TODO: allow users to adjust timers dynamically
// TODO: change colors between modes
// TODO: make timer responsive
// TODO: store/retrieve task from local storage
