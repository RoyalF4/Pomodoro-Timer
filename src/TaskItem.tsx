import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { type Task } from './types';
import { useState } from 'react';
import EditTaskPrompt from './EditTaskPrompt';

type TaskProps = {
  task: Task;
  onDelete: React.Dispatch<React.SetStateAction<Task[]>>;
  onEditTask: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function TaskItem({ task, onDelete, onEditTask }: TaskProps) {
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(true);
  }

  function handleDelete() {
    onDelete((list: Task[]) =>
      list.filter((t: { id: string }) => t.id !== task.id)
    );
  }
  return (
    <>
      {!edit && (
        <div className="flex bg-white text-black p-4 rounded">
          <p className="grow">{task.task}</p>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="cursor-pointer mr-2"
            size="lg"
            onClick={handleEdit}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            size="lg"
            onClick={handleDelete}
          />
        </div>
      )}
      {edit && (
        <EditTaskPrompt onEditTask={onEditTask} task={task} onEdit={setEdit} />
      )}
    </>
  );
}
