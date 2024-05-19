import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type SettingsProps = {
  settings: { focusTime: number; breakTime: number };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      focusTime: number;
      breakTime: number;
    }>
  >;
};

export default function Settings({ settings, setSettings }: SettingsProps) {
  const [focusTime, setFocusTime] = useState(String(settings.focusTime));
  const [breakTime, setBreakTime] = useState(String(settings.breakTime));

  function handleChangeFocus(e: React.ChangeEvent<HTMLInputElement>) {
    let time = e.target.value;
    if (Number(e.target.value) > 999) {
      time = '999';
    } else if (Number(e.target.value) < 0) {
      time = '0';
    }
    setFocusTime(time);
  }

  function handleChangeBreak(e: React.ChangeEvent<HTMLInputElement>) {
    let time = e.target.value;
    if (Number(e.target.value) > 999) {
      time = '999';
    } else if (Number(e.target.value) < 0) {
      time = '0';
    }
    setBreakTime(time);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSettings((s) => {
      return {
        ...s,
        focusTime: Number(focusTime),
        breakTime: Number(breakTime),
      };
    });
  }

  return (
    <Dialog>
      <DialogTrigger className="text-black bg-white px-4 py-2 rounded">
        <FontAwesomeIcon icon={faGear} className="mr-2" />
        <span>Settings</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="uppercase text-center border-b pb-4 border-black">
            Settings
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <h4 className="font-bold mb-4">Time (minutes)</h4>
          <div className="flex justify-around border-b border-black pb-4">
            <div>
              <label className="mr-4" htmlFor="focus">
                Focus
              </label>
              <input
                className="px-2 py-1 bg-gray-200 w-20 rounded"
                id="focus"
                value={focusTime}
                type="number"
                min={0}
                max={999}
                onChange={handleChangeFocus}
              />
            </div>
            <div className="">
              <label className="mr-4" htmlFor="break">
                Break
              </label>
              <input
                className="px-2 py-1 bg-gray-200 w-20 rounded"
                id="break"
                value={breakTime}
                type="number"
                min={0}
                max={999}
                onChange={handleChangeBreak}
              />
            </div>
          </div>
          <DialogClose
            type="submit"
            className="mt-4 block bg-black text-white rounded px-4 py-1 ml-auto"
          >
            OK
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
