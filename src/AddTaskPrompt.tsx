import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { type Task } from './types';

type AddTaskPromptProps = {
  onAddPrompt: React.Dispatch<React.SetStateAction<boolean>>;
  onAddTask: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function AddTaskPrompt({
  onAddPrompt,
  onAddTask,
}: AddTaskPromptProps) {
  const [task, setTask] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleSaveTask() {
    if (!task) return;
    onAddPrompt(false);
    onAddTask((list) => [...list, { id: uuidv4(), task }]);
  }

  function handleCancelTask() {
    onAddPrompt(false);
  }
  return (
    <div className="flex flex-col">
      <input
        value={task}
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
        placeholder="What are you working on?"
        className="p-4 border-none rounded-t-md focus:outline-none text-black"
      />
      <div className="flex justify-end gap-1 p-2 mb-4 bg-promptBG rounded-b-md">
        <button
          className="bg-none border-none text-gray-600 cursor-pointer"
          onClick={handleCancelTask}
        >
          Cancel
        </button>
        <button
          className="text-white bg-gray-700 border-none rounded px-4 py-2 cursor-pointer hover:bg-black"
          onClick={handleSaveTask}
        >
          Save
        </button>
      </div>
    </div>
  );
}
