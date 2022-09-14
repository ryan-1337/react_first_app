import { render } from "@testing-library/react";

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-uppercase mx-auto mx-0" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item text-end">
                            <button type="button" className="btn btn-secondary me-3" data-bs-toggle="modal" data-bs-target="#myModal">
                                <a className="nav-link" >Connexion</a>
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
       <div class="modal" id="myModal" tabIndex="-1" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Connexion</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div class="modal-body">
                        <label>Username :
                        <input type="text" name="username"/>
                        </label>
                        <label>Password :
                        <input type="password" name="password" />
                        </label>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Connexion</button>
                    </div>
                    </form>
                </div>
            </div>
        </div >
        </nav>
    );
}

function handleSubmit(e) {
    return (
        e.preventDefault();
    );
}