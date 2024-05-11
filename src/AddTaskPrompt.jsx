import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

AddTaskPrompt.propTypes = {
  onAddPrompt: PropTypes.func,
  onAddTask: PropTypes.func,
};

export default function AddTaskPrompt({ onAddPrompt, onAddTask }) {
  const [task, setTask] = useState('');

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSaveTask() {
    onAddPrompt(false);
    onAddTask((list) => [...list, { id: uuidv4(), task }]);
  }

  function handleCancelTask() {
    onAddPrompt(false);
  }
  return (
    <div className="prompt">
      <input
        value={task}
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
        placeholder="What are you working on?"
        className="input-add"
      />
      <div className="prompt__buttons">
        <button className="btn-cancel" onClick={handleCancelTask}>
          Cancel
        </button>
        <button className="btn-save" onClick={handleSaveTask}>
          Save
        </button>
      </div>
    </div>
  );
}
