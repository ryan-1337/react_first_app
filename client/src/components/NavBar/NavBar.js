import { render } from "@testing-library/react";
import { useState } from "react";
import Swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';



export default function NavBar(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalConnexion, setShowModalConnexion] = useState(false);
  const [showLogin, setShowLogin] = useState();
  const [showLogout, setShowLogout] = useState(['Inscription', 'btn-primary']);
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
                className={"btn btn-secondary me-3 " + showLogin}
                onClick={() => setShowModalConnexion(true)}
              >
                <a className="nav-link">Connexion</a>
              </button>
            </li>
            <li className="nav-item text-end">
              <button
                type="button"
                className={"btn " + showLogout[1] + " me-3"}
                onClick={() => {if(showLogout[0] === "Inscription") { setShowModalRegister(true)} else { handleLogout() } } }
              >
                <a className="nav-link">{showLogout[0]}</a>
              </button>
            </li>
          </ul>
          <Modal show={showModalRegister} onHide={() => setShowModalRegister(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Inscription</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleRegister}>
              <Modal.Body>
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
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModalRegister(false)}
                >
                  Fermer
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Enregistrer
                </button>
              </Modal.Footer>
            </form>
          </Modal>
          <Modal show={showModalConnexion} onHide={() => setShowModalConnexion(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Connection</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleConnexion}>
              <Modal.Body>
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
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => setShowModalConnexion(false)}
                >
                  Fermer
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Connection
                </button>
              </Modal.Footer>
            </form>
          </Modal>
          <div className="modal" id="connexion" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Connexion</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
  function handleConnexion(e) {
    const url = 'https://localhost:44360/api/login';
    e.preventDefault();
    const userJson = {
      username: user,
      password: password,
    };
    console.log(JSON.stringify(userJson));
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userJson)
    })
      .then(response => response.json())
      .then(responseFromServer => {
        console.log(responseFromServer);
        if (responseFromServer.status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: responseFromServer.detail,
          });
        }
        else {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: userJson.username + ' Connected !',
          showConfirmButton: false,
          timer: 1500
        })
        setShowLogin('d-none');
        setShowLogout([userJson.username + ' Logout', 'btn-danger']);
        localStorage.setItem('cookie', userJson.username);
      }
        setShowModalConnexion(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function handleLogout() {
    localStorage.clear();
    setShowLogin();
    setShowLogout(['Inscription', 'btn-primary']);
  }

  function handleRegister(e) {
    const url = 'https://localhost:44360/api/users';
    e.preventDefault();
    const userJson = {
      username: user,
      password: password,
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userJson)
    })
      .then(response => response.json())
      .then(responseFromServer => {
        console.log(responseFromServer);
        setShowModalRegister(false);
        setShowModalConnexion(true);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }
}
