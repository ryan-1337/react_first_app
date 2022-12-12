import React from "react";
import { PageNotFound } from "../404/404";
import Formule from "../Formule/Formule";
import User from "../User/User";

const url = window.location.href;

export function DashBoard() {
    if (url === "http://localhost:3000/" || url === "http://localhost:3001/") {
        return (
            <>
                <h1>Dashboard</h1>
                <div style={{ display: "flex" }}>
                    <Formule />
                    <User url='http://localhost:3000/users' />
                </div>
            </>
        );
    }
    else if (url === "http://localhost:3000/users" || url === "http://localhost:3001/users") {
        return (
            <>
                <h1>Utilisateurs</h1>
                <div style={{ display: "flex", width: "100%", height: "50%" }}>
                    <User url='http://localhost:3000/users' />
                </div>
            </>
        );
    }
    else {
        return null;
    }
}