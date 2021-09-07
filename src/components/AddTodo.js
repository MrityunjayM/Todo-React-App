import { useState } from "react";

function AddTodo({ addTodos, formToggle }) {
  const [Todo, setTodo] = useState("");
  const [Desc, setDesc] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    window.location.assign("/#");
    // console.log(todo, desc)
    if (!Todo) {
      alert("Please fill the inputs...");
      return;
    }

    addTodos({ Todo, Desc });

    setTodo("");
    setDesc("");
  };

  return (
    <div className="model">
      <div className="form-group bg-color py-1 px-3 mt-3" id="add-form">
        <button
          className="close-model"
          onClick={() => {
            formToggle(false);
            window.location.assign("/#");
          }}
          title="Close"
        >
          &times;
        </button>

        <form className="mb-3" onSubmit={(e) => onSubmit(e)}>
          <label htmlFor="todoInput" className="form-label fs-4">
            Add Your To-Do :
          </label>
          <input
            type="text"
            className="form-control w-75"
            id="todoInput"
            name="Todo"
            aria-describedby="todo-desc"
            placeholder="Todo title"
            required
            autoFocus="on"
            autoComplete="off"
            onChange={(e) => setTodo(e.target.value)}
          />

          <br />

          <label htmlFor="todoDesc" className="form-label fs-5">
            Description :
          </label>
          <input
            type="text"
            className="form-control w-75"
            id="todoDesc"
            name="Desc"
            placeholder="Give a description..."
            onChange={(e) => setDesc(e.target.value)}
          />

          <button
            type="submit"
            id="submit-btn"
            className="btn mt-2"
            title="Submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
  
export default AddTodo;