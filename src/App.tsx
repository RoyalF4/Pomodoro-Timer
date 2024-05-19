import { useState } from 'react';
import Timer from './Timer';
import TaskList from './TaskList';
import Header from './Header';
import useLocalStorage from './UseLocalStorage';

// const FOCUS_TIME = 25 * 60;
// const BREAK_TIME = 5 * 60;
const defaultSettings = {
  focusTime: 25,
  breakTime: 5,
};

type UserSettings = {
  focusTime: number;
  breakTime: number;
};

export default function App() {
  const [mode, setMode] = useState('focus');
  // get settings from local storage
  const [settings, setSettings] = useLocalStorage<UserSettings>(
    defaultSettings,
    'settings'
  );
  return (
    <>
      <Header settings={settings} setSettings={setSettings} />
      <main className="main">
        <Timer
          focusTime={settings.focusTime * 60}
          breakTime={settings.breakTime * 60}
          mode={mode}
          setMode={setMode}
        />
        <span className="block text-center mb-4">
          {mode === 'focus' ? 'Time to focus!' : 'Time for a break!'}
        </span>
        <TaskList />
      </main>
    </>
  );
}

// TODO: change colors between modes
// TODO: make timer responsive
// TODO: store/retrieve task from local storage
