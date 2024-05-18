import { useState } from 'react';
import { type Task } from './types';

type EditTaskPromptProps = {
  task: Task;
  onEditTask: React.Dispatch<React.SetStateAction<Task[]>>;
  onEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddTaskPrompt({
  task,
  onEditTask,
  onEdit,
}: EditTaskPromptProps) {
  const [name, setName] = useState(task.task);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name) return;
    onEditTask((tasks) =>
      tasks.map((t) => (task.id === t.id ? { ...t, task: name } : t))
    );
    onEdit(false);
  }

  function handleCancelTask() {
    onEdit(false);
  }
  return (
    <form onSubmit={handleSaveTask} className="flex flex-col">
      <input
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
        placeholder="What are you working on?"
        className="p-4 border-none rounded-t-md focus:outline-none text-black"
      />
      <div className="flex justify-end gap-1 p-2 mb-4 bg-promptBG rounded-b-md">
        <button
          type="button"
          className="bg-none border-none text-gray-600 cursor-pointer"
          onClick={handleCancelTask}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-white bg-gray-700 border-none rounded px-4 py-2 cursor-pointer hover:bg-black"
        >
          Save
        </button>
      </div>
    </form>
  );
}
