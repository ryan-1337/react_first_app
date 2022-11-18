import React from "react";
import { Card } from "react-bootstrap";

const styles = {
    cardFormula: {
        borderTop: "3px solid mediumslateblue",
        marginBottom: '20px'
    }
}

export default function Formule() {
    return (
        <>
            <Card className="cardFormula" style={{ width: '18rem', marginTop: '2em', marginLeft: '2em' }}>
                <Card.Body style= {styles.cardFormula}>
                    <Card.Title className="mb-3">Formules <button className="btn btn-primary btn-sm">Voir tous</button></Card.Title>
                    <Card.Subtitle className="mb-4">Formule Mini</Card.Subtitle>
                    <Card.Subtitle className="mb-4">Formule Eco</Card.Subtitle>
                    <Card.Subtitle className="mb-4">Formule Maxi</Card.Subtitle>
                </Card.Body>
            </Card>

        </>
    )
}