import Settings from './Settings';

type HeaderProps = {
  settings: { focusTime: number; breakTime: number };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      focusTime: number;
      breakTime: number;
    }>
  >;
};

export default function Header({ settings, setSettings }: HeaderProps) {
  return (
    <div className="self-stretch flex justify-between px-4 pt-4">
      <h1 className="text-4xl font-bold">Pomodoro Timer</h1>
      <Settings settings={settings} setSettings={setSettings} />
    </div>
  );
}
