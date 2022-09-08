export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-uppercase mx-auto mx-0" href="#">good night</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item text-end">
                            <button type="button" className="btn btn-secondary me-3">
                                <a className="nav-link" href="#">Connexion</a>
                            </button>
                        </li>
                        <li className="nav-item text-end">
                            <button type="button" className="btn btn-primary">
                                <a className="nav-link" href="#">Inscription</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}