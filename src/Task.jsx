import PropTypes from 'prop-types';

Task.propTypes = {
  task: PropTypes.string,
};

export default function Task({ task }) {
  return (
    <div className="task__item">
      <p>{task}</p>
    </div>
  );
}
