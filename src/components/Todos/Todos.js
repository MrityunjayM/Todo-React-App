import React from "react"
import Todo from "./Todo"

export function Todos({ todos, onDelete, changeToDoState }) {
  return (
    <div className="Todos container rounded-2 px-1 mt-4 mb-3 bg-color">
      {todos.length === 0 ? (
        <h2>Hurrey....</h2>
      ) : (
        todos.map(todo => (
          <Todo
            key={todo.Id}
            todoId={todo.Id}
            Title={todo.title}
            Desc={todo.desc}
            toDoState={todo.toDoState}
            onDelete={onDelete}
            changeToDoState={changeToDoState}
          />
        ))
      )}
    </div>
  )
}

// export default Todos;
