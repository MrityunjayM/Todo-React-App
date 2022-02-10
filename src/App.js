import React, { useState, useEffect } from "react"

// Stylessheets
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

// Components...
import { Header, AddTodo, Todos, Footer } from "./components"

function App() {
  const [todos, setTodos] = useState([])
  const [formShow, setFormShow] = useState(false)

  // get ToDos from localStorage...
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("Todos"))

    if (localData) return setTodos(localData)

    return setTodos([])
  }, [])

  // Update LocalStorage after modifications...
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos))
    console.log("Local Storage Updated...")
  }, [todos])

  // Add Todo...
  const addTodos = todo => {
    const Id = "TD_" + Math.floor(Math.random() * 100000) + 1
    const newTodo = { Id, ...todo, toDoState: false }
    setTodos(currState => [...currState, newTodo])
    setFormShow(!formShow)
  }

  // Update todo with completion state...
  const changeToDoState = id => {
    setTodos(currState =>
      currState.map(todo =>
        todo.Id === id ? { ...todo, toDoState: !todo.toDoState } : todo
      )
    )
  }

  // Form Toggle
  const formToggle = () => setFormShow(!formShow)

  // Delete Todo..
  const deleteTodo = id =>
    setTodos(currState => currState.filter(todo => todo.Id !== id))

  return (
    <main className="App mx-auto container-sm">
      <Header formToggle={formToggle} formShow={formShow} />
      {formShow && <AddTodo addTodos={addTodos} formToggle={formToggle} />}
      <Todos
        todos={todos}
        onDelete={deleteTodo}
        changeToDoState={changeToDoState}
      />
      <Footer />
    </main>
  )
}

export default App
