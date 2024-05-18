import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { type Task } from './types';

type TaskProps = {
  task: Task;
  onDelete: Function;
};

export default function TaskItem({ task, onDelete }: TaskProps) {
  function handleDelete() {
    onDelete((list: []) =>
      list.filter((t: { id: string }) => t.id !== task.id)
    );
  }
  return (
    <div className="flex bg-white text-black p-4 rounded">
      <p className="grow">{task.task}</p>
      <FontAwesomeIcon
        icon={faTrashCan}
        className="cursor-pointer"
        size="lg"
        onClick={handleDelete}
      />
    </div>
  );
}
