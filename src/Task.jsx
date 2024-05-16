import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func,
};

export default function Task({ task, onDelete }) {
  function handleDelete() {
    onDelete((list) => list.filter((t) => t.id !== task.id));
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
