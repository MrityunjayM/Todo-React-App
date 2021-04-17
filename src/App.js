import React, { useState } from 'react';

// Stylessheets
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

// Components...
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos/Todos';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState(() => {
    let data;
    if (localStorage.getItem("Todos") !== null){
      data = JSON.parse(localStorage.getItem("Todos"));
    }else{
      data = [];
    }
    return data;
  });
  const [formShow, setFormShow] = useState(false);
  
  // Form Toggle...
  const showForm = (flag) => {
    const addForm = document.getElementById('add-form');
    // console.log(addForm);
    if(flag){
      addForm.style.display = 'none';
    } else {
      addForm.style.display = 'block'
    };
    setFormShow(!flag);
  }

  // Add Todo...
  const addTodos = (todo) => {
    const Id = 'TD_' + Math.floor(Math.random() * 100000) + 1 ;
    const newTodo = {Id, ...todo};
    setTodos([...todos, newTodo]);

    showForm(formShow);
  }

  // Delete Todo..
  const deleteTodo = (id) => setTodos( todos.filter((todo) => todo.Id !== id ))

  // Update localStorage after adding or deleting To-Do...
  /*function updateLocal() {
  }*/
  localStorage.setItem("Todos", JSON.stringify(todos));

  return (
      <div className="App mx-auto container-sm">
        <Header formToggle={showForm} formShow = {formShow} />
        <AddTodo  addTodos={addTodos}/>
        <Todos todos ={todos} onDelete={deleteTodo}/>
        <Footer />
      </div>
  );
}

export default App;