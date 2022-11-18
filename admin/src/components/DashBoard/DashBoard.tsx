import React from "react";
import Formule from "../Formule/Formule";
import User from "../User/User";

export function DashBoard() {
    return (
        <>
            <h1>Dashboard</h1>
            <div style={{display: "flex"}}>
                <Formule />
                <User />
            </div>
        </>
    );
}