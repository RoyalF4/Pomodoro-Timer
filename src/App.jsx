import { useState } from 'react';
import Timer from './Timer';
import TaskList from './Task';

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
      <span className="mode-message">
        {mode === 'focus' ? 'Time to focus!' : 'Time for a break!'}
      </span>
      <TaskList />
    </main>
  );
}
