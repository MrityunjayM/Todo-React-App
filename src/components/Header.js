function Header({ formShow, formToggle }) {
  return (
    <nav
      className="navbar mx-0 py-0 border border-3 border-top-0 border-bottom-0"
      style={{ position: "sticky", top: "0", zIndex: "100" }}
    >
      <div className="container bg-transparent">
        <a
          className="navbar-brand fs-1 fw-bold navbar-light text-capitalize mx-auto"
          href="/"
          title="Daily/Weekly ToDo Manager"
        >
          To - Do List
        </a>
        <button
          className="show-form pt-1 pe-1"
          title="Add ToDo"
          onClick={() => {
            formToggle(!formShow);
            window.location.assign("/#addtodo");
          }}
        >
          {!formShow ? (
            <i className="bi bi-plus-circle"></i>
          ) : (
            <i className="bi bi-x-circle-fill"></i>
          )}
        </button>
        <button
          className="clearTasks pt-1 pe-1"
          title="Clear All ToDo's"
          onClick={() => {
            if (window.confirm("Do you really wants to Delete All TODO's.")) {
              localStorage.clear();
              window.location.assign('/');
            }
          }}
        >
          Clear All
        </button>
      </div>
    </nav>
  );
}

export default Header;
