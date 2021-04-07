function Header(props) {

    return (
     <nav 
     className="navbar mx-0 py-0 border border-3 border-warning border-top-0 border-bottom-0" 
     style={{position: 'sticky', top: '0',zIndex:'100'}}>
        <div className="container bg-transparent">
            <a className="navbar-brand fs-1 fw-bold navbar-light text-warning text-capitalize mx-auto" href="/">
                To - Do List
            </a>
            <button 
                className="show-form pt-1 pe-1" 
                title="Add Task" 
                onClick={() => {
                    props.formToggle(props.formShow);
                    if(!props.formShow)
                    {window.scrollTo(0,0);}
                }}
            >
                {(!props.formShow) ? <i className='bi bi-plus-circle'></i> : <i className='bi bi-x-circle-fill'></i>
                }
            </button>
            <button 
                className="clearTasks pt-1 pe-1" 
                title="Clear Tasks" 
                onClick={() => { localStorage.clear(); window.location.reload(); }}
            >Clear All</button>
        </div>
     </nav>
    );
}
  
export default Header;