// import Button from './deleteBtn'

function Todo(props) {
    
    return (
        <div className="card my-2 rounded-0 border-0 flex-row justify-content-between Todo">
            <div className="w-100">
                <div className="card-header border-0 py-0 pe-0 d-flex align-items-center">
                    <h4 className="mt-2 text-capitalize">
                        {props.Todo}
                    </h4>
                </div>
                <div className="d-flex card-body pt-1 pb-1">
                    <h6 className="card-title">
                        Description:
                    </h6>
                    <p className="card-text ms-2">
                        {props.Desc}
                    </p>
                </div>
            </div>
            <button className="btn deleteBtn rounded-0" onClick={() => props.onDelete(props.todoId)}>
                <i className='bi bi-x'></i>
            </button>
        </div>
    );
}

export default Todo;