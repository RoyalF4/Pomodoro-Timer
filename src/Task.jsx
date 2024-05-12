import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

Task.propTypes = {
  task: PropTypes.string,
  onDelete: PropTypes.func,
};

export default function Task({ task, onDelete }) {
  function handleDelete() {
    onDelete((list) => list.filter((t) => t.id !== task.id));
  }
  return (
    <div className="item">
      <p className="item__name">{task.task}</p>
      <FontAwesomeIcon
        icon={faTrashCan}
        className="icon-delete"
        size="lg"
        onClick={handleDelete}
      />
    </div>
  );
}
