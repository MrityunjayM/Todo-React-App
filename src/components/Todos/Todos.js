import Todo from './Todo'

function Todos({ todos, onDelete, changeToDoState }) {
    return (
      <div className="Todos container rounded-2 px-1 mt-4 mb-3 bg-color">
        {todos.length === 0 ? (
          <h2>Hurrey....</h2>
        ) : (
          todos.map((todo, i) => (
            <Todo
              key={i}
              todoId={todo.Id}
              Todo={todo.Todo}
              Desc={todo.Desc}
              toDoState={todo.toDoState}
              onDelete={onDelete}
              changeToDoState={changeToDoState}
            />
          ))
        )}
      </div>
    );
}

export default Todos;