import { useState } from 'react';
import AddTaskPrompt from './AddTaskPrompt';
import Task from './Task';

export default function TaskList() {
  const [showAdd, setShowAdd] = useState(false);
  const [taskList, setTaskList] = useState([]);

  function handleAddTask() {
    setShowAdd(true);
  }

  return (
    <div className="tasks">
      <h2 className="tasks__heading">Task</h2>
      <div className="line-break"></div>
      <div className="tasks__list">
        {taskList.map((task) => (
          <Task key={task.id} task={task.task} />
        ))}
      </div>

      {showAdd && (
        <AddTaskPrompt onAddPrompt={setShowAdd} onAddTask={setTaskList} />
      )}
      {!showAdd && (
        <button className="tasks__btn-add" onClick={handleAddTask}>
          <span className="icon-add">
            <i className="fa-solid fa-plus" style={{ color: '#0008ff' }}></i>
          </span>
          Add Task
        </button>
      )}
    </div>
  );
}
