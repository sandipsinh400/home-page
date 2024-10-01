function Header() {
    return (
        <>


            <div className="container">
                <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-light ">
                    <div className="container " >
                        <a className="navbar-brand text-uppercase col-6 col-xl-2  fw-bold text-primary " href="#">Oneder</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
            <header>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1 className="text-white display-4 fw-bold">I'm Creative One Page <br /> Template by Colorlib</h1>
                    <br />
                    <div className=" text-center">
                        <button className="btn btn-primary p-2">Get in Touch</button>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Header