function Todo(props) {   

    return (
        <div className="card my-2 rounded-0 border-0 flex-row justify-content-between Todo">
            <div className="todo-content" >
                <div className="card-header border-0 py-0 pe-2 d-flex align-items-center">
                    <div className='check'>
                        <input 
                        className={`${props.todoId}`} 
                        type='checkbox'
                        title='Mark as completed' 
                        onClick={() => {props.changeToDoState(props.todoId)}}
                        />
                        <span className='checkmark' ></span>
                    </div>
                    <h4 
                    id={props.todoId} 
                    style={{textDecoration: !props.toDoState ? 'line-through' : 'none'}}
                    title={props.Todo}
                    className="mt-2 text-capitalize pe-2"
                    >
                        {props.Todo}
                    </h4>
                </div>
                {props.toDoState ? <div className="d-flex card-body pt-1 pb-1">
                    <h6 className="card-title">
                        Description:
                    </h6>
                    <p className="card-text ms-2">
                        {props.Desc}
                    </p>
                </div> : ""}
                
            </div>
            <button className="btn deleteBtn rounded-0" title='Delete This ToDo' onClick={() => props.onDelete(props.todoId)}>
                <i className='bi bi-x'></i>
            </button>
        </div>
    );
}

export default Todo;