function TodosList({ data, updateTodoStatus, removeTodo }) {
  return (
    <ul className="todos-list">
      {data.map((item) => {
        return (
          <li
            key={item.id}
            className={`todo-item ${item.done ? "checked" : ""}`}
          >
            <input
              type="checkbox"
              onChange={(e) => updateTodoStatus(item.id, e.target.checked)}
              checked={item.done}
            />

            <div className="text-wrapper">
              <p>{item.title}</p>

              <button
                onClick={() => removeTodo(item.id)}
                className="delete-btn"
              >
                <span>x</span>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TodosList;
