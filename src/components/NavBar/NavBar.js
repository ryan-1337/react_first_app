import { render } from "@testing-library/react";
import { useState } from "react";

export default function NavBar(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-uppercase mx-auto mx-0" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item text-end">
              <button
                type="button"
                className="btn btn-secondary me-3"
                data-bs-toggle="modal"
                data-bs-target="#connexion"
              >
                <a className="nav-link">Connexion</a>
              </button>
            </li>
            <li className="nav-item text-end">
              <button
                type="button"
                className="btn btn-primary me-3"
                data-bs-toggle="modal"
                data-bs-target="#inscription"
              >
                <a className="nav-link">Inscription</a>
              </button>
            </li>
          </ul>
      <div class="modal" id="inscription" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Inscription</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleRegister}>
              <div className="modal-body">
                <label>
                  Username :
                  <input
                    type="text"
                    name="username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </label>
                <label>
                  Password :
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Fermer
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
      <div class="modal" id="connexion" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Connexion</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <label>
                  Username :
                  <input
                    type="text"
                    name="username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </label>
                <label>
                  Password :
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Connexion
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
  function handleSubmit(e) {
    e.preventDefault();
    const userJson = {
      username: user,
      password: password,
    };
    console.log(JSON.stringify(userJson));
  }

  function handleRegister(e) {
    e.preventDefault();
    const userJson = {
      username: user,
      password: password,
    };
    console.log(JSON.stringify(userJson));
  }
}
