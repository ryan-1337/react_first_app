import React from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import NavBar from "../../components/NavBar/NavBar";
import { DashBoard } from "../../components/DashBoard/DashBoard";
import { getJSDocReadonlyTag } from "typescript";
import SideBar from "../../components/SideBar/SideBar";
import '../../index.css';

export function HomePage() {
    return (
        <div className="App d-flex flex-column min-vh-100">
            <header className="App-header navBar">
                <NavBar />
            </header>
            <main className="dashBoard" >
                <DashBoard />
            </main>
            <aside className="sideBar">
                <SideBar />
            </aside>
            <Outlet />
        </div>
    );
}