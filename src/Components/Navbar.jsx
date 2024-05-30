

const Navbar = ({setCategory}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">Web-News</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("Technology")} style={{ cursor: 'pointer' }}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("Business")} style={{ cursor: 'pointer' }}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("Health")} style={{ cursor: 'pointer' }}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("Sports")} style={{ cursor: 'pointer' }}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("Entertainment")} style={{ cursor: 'pointer' }}>Entertainment</div>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar