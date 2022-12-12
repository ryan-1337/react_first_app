import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import api from "../../env/base_api_url"
import IUsers from "../../types/Users"

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
    // return await fetch(getUserApi, {
    //     method: 'GET',
    // })
    //     .then((response) => response.json())
    //     .then((response) => {
    //         console.log(response)
    //         return response as Array<IUsers>;
    //     });
}

const getMaxTenUser = async () => {
    const result = await fetch(getMaxTenUserApi);
    return (await result.json()) as Array<IUsers>;
}

export default function User(url: UserProps) {
    const [isUser] = useState<boolean>(url.url === uri);
    const [userList, setUserList] = useState<Array<IUsers>>([]);
    const [maxTenUserList, setMaxTenUserList] = useState<Array<IUsers>>([]);
    useEffect(() => {
       getUser().then(res => setUserList(res));
       getMaxTenUser().then(res => setMaxTenUserList(res));
    }, []);
    return (
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
                        <button className="btn btn-danger btn-sm ms-2 me-2">Supprimer</button> 
                        <button className="btn btn-success btn-sm">Editer</button></Card.Title>) })}
            </Card.Body>
        </Card>
    )
}