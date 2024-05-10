import Timer from './Timer';

const START_TIME = 25 * 60;

export default function App() {
  return (
    <main className="main">
      <Timer focusTime={START_TIME} />
    </main>
  );
}
