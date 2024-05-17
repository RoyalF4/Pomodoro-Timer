import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function Task({
  task,
  onDelete,
}: {
  task: { task: string; id: string };
  onDelete: Function;
}) {
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
