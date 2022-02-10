import React, { useState } from "react"

export function AddTodo(props) {
  const [title, setTitle] = useState(props.title || "")
  const [desc, setDesc] = useState(props.desc || "")

  const onSubmit = e => {
    e.preventDefault()
    if (!title) {
      alert("Please fill the inputs...")
      return
    }

    props.addTodos({ title, desc })

    setTitle("")
    setDesc("")
  }

  return (
    <div className="model">
      <div className="form-group bg-color py-1 px-3 mt-3" id="add-form">
        <button
          className="close-model"
          onClick={() => {
            props.formToggle(false)
          }}
          title="Close"
        >
          &otimes;
        </button>

        <form className="mb-3" onSubmit={e => onSubmit(e)}>
          <label htmlFor="todoInput" className="form-label fs-4">
            Add Your To-Do :
          </label>
          <input
            type="text"
            className="form-control w-75"
            id="todoInput"
            name="title"
            aria-describedby="todo-desc"
            placeholder="Todo title"
            required
            autoFocus="on"
            autoComplete="off"
            onChange={e => setTitle(e.target.value)}
          />

          <br />

          <label htmlFor="todoDesc" className="form-label fs-5">
            Description :
          </label>
          <input
            type="text"
            className="form-control w-75"
            id="todoDesc"
            name="desc"
            placeholder="Give a description..."
            onChange={e => setDesc(e.target.value)}
          />

          <button
            type="submit"
            id="submit-btn"
            className="btn mt-2"
            title="Add"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

// export default AddTodo;
