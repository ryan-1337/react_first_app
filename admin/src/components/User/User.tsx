import React from "react";
import { Card } from "react-bootstrap";

const styles = {
    cardUser: {
        borderTop: "3px solid mediumslateblue",
        marginBottom: '20px'
    }
}

export default function User() {
    return (
        <>
            <Card className="cardFormula" style={{ width: '18rem', marginTop: '2em', marginLeft: '10px' }}>
                <Card.Body style= {styles.cardUser}>
                    <Card.Title className="mb-3">Utilisateurs <button className="btn btn-primary btn-sm">Voir tous</button></Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}