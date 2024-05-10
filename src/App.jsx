import Timer from './Timer';

const FOCUS_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

export default function App() {
  return (
    <main className="main">
      <Timer focusTime={FOCUS_TIME} breakTime={BREAK_TIME} />
    </main>
  );
}
