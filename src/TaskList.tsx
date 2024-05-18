import { useState } from 'react';
import AddTaskPrompt from './AddTaskPrompt';
import TaskItem from './TaskItem';
import { type Task } from './types';
import useLocalStorage from './UseLocalStorage';

export default function TaskList() {
  const [showAdd, setShowAdd] = useState(false);
  //const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskList, setTaskList] = useLocalStorage<Task[]>([], 'task');

  function handleAddTask() {
    setShowAdd(true);
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-semibold mb-4">Task</h2>
      <div className="border-b-2 border-white mb-4"></div>
      <div className="flex flex-col gap-1 mb-8">
        {taskList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={setTaskList}
            onEditTask={setTaskList}
          />
        ))}
      </div>
      {showAdd && (
        <AddTaskPrompt onAddPrompt={setShowAdd} onAddTask={setTaskList} />
      )}
      {!showAdd && (
        <button
          className="flex items-center justify-center py-4 rounded-md cursor-pointer bg-addTaskBg border-dashed border-2 border-addTaskBorder"
          onClick={handleAddTask}
        >
          <span className="flex items-center justify-center bg-white rounded-full h-6 w-6 p-1 mr-2">
            <i className="fa-solid fa-plus" style={{ color: '#0008ff' }}></i>
          </span>
          <span>Add Task</span>
        </button>
      )}
    </div>
  );
}
