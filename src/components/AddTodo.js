import { useState } from "react";

function AddTodo({ addTodos }) {
    const [Todo, setTodo] = useState('');
    const [Desc, setDesc] = useState('');

    const onSubmit= (e) => {
        e.preventDefault()
        window.location.assign('/#')
        // console.log(todo, desc)
        if(!Todo) {
            alert('Pls add todo...');
            return 0;
        }
        addTodos({Todo, Desc});

        document.getElementById('todoInput').value = '';
        document.getElementById('todoDesc').value = '';
    }

    return (
        <div className="form-group bg-color py-1 px-3 mt-3" id="add-form">
            <form className='mb-3' onSubmit= {(e) => onSubmit(e)}>

                <label htmlFor="todoInput" className="form-label fs-4">
                    Add Your To-Do:
                </label>
                <input type="text" className="form-control w-75" id="todoInput" name="Todo" aria-describedby="todo-desc" placeholder='Add Your Todo...' required autoFocus="on" autoComplete="off" onChange= {(e)=> setTodo(e.target.value)}/>

                <div id="todo-desc" className="form-text mb-1 ms-2 text-capitalize">
                    Add your daily/weekly Todo's here.
                </div>
                
                <label htmlFor="todoDesc" className="form-label fs-5">
                    Describe Your To-Do:
                </label>
                <input type="text" className="form-control w-75" id="todoDesc" name="Desc" placeholder='Give a description...' autoComplete="off" onChange= {(e)=> setDesc(e.target.value)}/>
                    
                <button type="submit" id='submit-btn' className="btn mt-2" title='Submit' >
                    Add
                </button>
            </form>
        </div>
    );
}
  
export default AddTodo;