import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import api from "../../env/base_api_url"
import IUsers from "../../types/Users"
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';

const getUserApi = api + 'users';
const getMaxTenUserApi = api + 'users/ten'

const uri = window.location.href;

const styles = {
    cardUser: {
        borderTop: "3px solid mediumslateblue",
        marginBottom: '20px'
    }
}

interface UserProps {
    url: string;
}

const getUser = async () => {
    const result = await fetch(getUserApi);
    return (await result.json()) as Array<IUsers>;
}

const getMaxTenUser = async () => {
    const result = await fetch(getMaxTenUserApi);
    return (await result.json()) as Array<IUsers>;
}

export default function User(url: UserProps) {
    const [isUser] = useState<boolean>(url.url === uri);
    const [userList, setUserList] = useState<Array<IUsers>>([]);
    const [maxTenUserList, setMaxTenUserList] = useState<Array<IUsers>>([]);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [idUserSelected, setIdUserSelected] = useState<Number>(0);
    useEffect(() => {
       getUser().then(res => setUserList(res));
       getMaxTenUser().then(res => setMaxTenUserList(res));
    }, []);
    const toggleModalDelete = (idUser : Number) => {
        setIdUserSelected(idUser);
        setShowModalDelete(true);
    };
    const handleDelete = (e: any) => {
        e.preventDefault();
        const url = getUserApi + '/' + idUserSelected;
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => {
            Swal.fire({
            position: 'top-end',
            icon: 'succes',
            title: ' Deleted !',
            showConfirmButton: false,
            timer: 1500
          })
        })
    };
    return (
        <>
        <Card className="cardFormula d-flex" style={{ width: isUser ? '100%' : '18rem', marginTop: '2em', marginLeft: '3rem' }}>
            <Card.Body style={styles.cardUser}>
                {!isUser && <Card.Title className="mb-3">Utilisateurs <a href="/users"><button className="btn btn-primary btn-sm">Voir tous</button></a></Card.Title>}
                {!isUser && maxTenUserList.map(
                    user => {
                        return (<Card.Title key={user.id} className="mb-3"> Id : {user.id} - Username : {user.userName}</Card.Title>)}
                )}
                {isUser && userList.map(
                    user => { 
                        return (<Card.Title key={user.id} className="mb-3"> Id : {user.id} - Username : {user.userName} - Inscription : {new Date(user.inscriptionDate).toISOString().split("T")[1]} - Connexion : {user.connexionDate ? new Date(user.connexionDate).toISOString().split("T")[0] : null} 
                        <button className="btn btn-danger btn-sm ms-2 me-2" onClick={() => toggleModalDelete(user.id)}>Supprimer</button> 
                        <button className="btn btn-success btn-sm">Editer</button></Card.Title>) })}
            </Card.Body>
        </Card>
          <Modal show={showModalDelete} onHide={() => setShowModalDelete(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleDelete}>
              <Modal.Body>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => setShowModalDelete(false)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowModalDelete(false)}
                >
                  No
                </button>
              </Modal.Body>
            </form>
          </Modal>
          </>
    )
}
