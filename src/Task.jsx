export default function Task() {
  return (
    <div className="tasks">
      <h2>Task</h2>
      <div className="line-break"></div>
      <div className="tasks__list"></div>
      <button className="task__btn-add">
        <i className="fa-solid fa-plus" style={{ color: '#0008ff' }}></i>Add
        Task
      </button>
    </div>
  );
}
