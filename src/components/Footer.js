const Footer = () => {
    return (
        <footer className="footer mt-auto">
            <div className="card p-0 text-light text-center bg-transparent rounded-0">
                <div className="card-footer px-0 py-3 d-flex justify-content-between">
                    <p className="ps-3 mb-1">&copy;2021 </p>
                    <a className="nav nav-link text-white p-0" href='/#About'>About Us!</a>
                    {/* <p className="me-3 mb-1 text-muted">By : Mrityunjay Mishra</p> */}
                </div>
            </div>  
        </footer>
    );
}

export default Footer;