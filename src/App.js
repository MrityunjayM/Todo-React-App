import React, { useState } from 'react';

// Stylessheets
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

// Components...
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos/Todos';
import Footer from './components/Footer';

// fetch ToDo's from localStorage...
const getFromLocal = () => {
  if (localStorage.getItem("Todos") !== null){
    return JSON.parse(localStorage.getItem("Todos"))
  }else{
    return []
  }
}

function App() {
  const [todos, setTodos] = useState(getFromLocal());
  const [formShow, setFormShow] = useState(false);
  
  // Form Toggle...
  const showForm = (flag) => {
    const addForm = document.getElementById('add-form');

    if(flag){
      addForm.style.display = 'none';
    } else {
      addForm.style.display = 'block'
    };
    setFormShow(!flag);
  }

  // update todo with completion state...
  const changeToDoState = (id) => {
    setTodos(
      todos.map((todo) => todo.Id === id ? {...todo,toDoState: !todo.toDoState} : todo)
    )
    todos.map((todo)=> {
      document.querySelector(`.${id}`).checked= todo.toDoState;
      return 0
    })
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      todos.map((todo) => {
        document.querySelector(`#${todo.Id}`).style.textDecoration === 'line-through' ? document.querySelector(`.${todo.Id}`).checked= !todo.toDoState : document.querySelector(`.${todo.Id}`).checked= !todo.toDoState;
        return 0
      },1000)
    })
  });

  // Add Todo...
  const addTodos = (todo) => {
    const Id = 'TD_' + Math.floor(Math.random() * 100000) + 1 ;
    const newTodo = {Id, ...todo,toDoState: true};
    setTodos([...todos, newTodo]);

    showForm(formShow);
  }

  // Delete Todo..
  const deleteTodo = (id) => setTodos( todos.filter((todo) => todo.Id !== id ))
  // set localStorage...
  localStorage.setItem("Todos", JSON.stringify(todos));

  return (
    <div className="App mx-auto container-sm">
      <Header formToggle={showForm} formShow = {formShow} />
      <AddTodo  addTodos={addTodos}/>
      <Todos todos ={todos} onDelete={deleteTodo} changeToDoState={changeToDoState}/>
      <Footer />
    </div>
  );
}

export default App;