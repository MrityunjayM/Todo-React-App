import { useState, useEffect } from "react";
import "jquery";

// Stylessheets
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// Components...
import { Header, AddTodo, Todos, Footer } from "./components";

function App() {
  const [todos, setTodos] = useState([]);
  const [formShow, setFormShow] = useState(false);

  // get ToDos from localStorage...
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("Todos"));

    if (localData) return setTodos(localData);

    return setTodos([]);
  }, []);

  // Update LocalStorage after modifications...
  useEffect(UpdateLocalStorage, [todos]);

  // Set LocalStorage...
  function UpdateLocalStorage() {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }

  // Add Todo...
  const addTodos = (todo) => {
    const Id = "TD_" + Math.floor(Math.random() * 100000) + 1;
    const newTodo = { Id, ...todo, toDoState: true };
    setTodos([...todos, newTodo]);

    setFormShow(!formShow);
  };

  // Update todo with completion state...
  const changeToDoState = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.Id === id ? { ...todo, toDoState: !todo.toDoState } : todo
      )
    );
  };

  // Form Toggle
  const formToggle = (showForm) => setFormShow(showForm);

  // Delete Todo..
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.Id !== id));

  return (
    <div className="App mx-auto container-sm">
      <Header formToggle={formToggle} formShow={formShow} />
      {formShow && <AddTodo addTodos={addTodos} formToggle={formToggle} />}
      <Todos
        todos={todos}
        onDelete={deleteTodo}
        changeToDoState={changeToDoState}
      />
      <Footer />
    </div>
  );
}

export default App;
