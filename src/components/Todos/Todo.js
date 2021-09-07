function Todo({ todoId, Todo, toDoState, Desc, onDelete, changeToDoState }) {
  return (
    <div className="card my-3 mx-0 rounded-0 border-0 flex-row justify-content-between Todo">
      <div className="todo-content">
        <div className="card-header border-0 py-0 pe-2 d-flex align-items-center">
          <div className="check">
            <input
              className={`${todoId}`}
              type="checkbox"
              title="Mark as completed"
              onClick={() => changeToDoState(todoId)}
              defaultChecked = {!toDoState}
            />
            <span className={`checkmark`}></span>
          </div>
          <h4
            id={todoId}
            style={{ textDecoration: !toDoState ? "line-through" : "none" }}
            title={Todo}
            className="mt-2 text-capitalize pe-2"
          >
            {Todo}
          </h4>
        </div>
        {toDoState && Desc ? (
          <div className="d-flex card-body py-1">
            <p className="card-text">{Desc}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <button
        className="btn deleteBtn rounded-0 py-0"
        title="Delete This ToDo"
        onClick={() => onDelete(todoId)}
      >
        <i className="bi bi-x"></i>
      </button>
    </div>
  );
}

export default Todo;
