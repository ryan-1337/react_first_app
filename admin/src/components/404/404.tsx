import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

export function PageNotFound() {
    return (
        <div className="App d-flex flex-column min-vh-100">
            <header className="App-header navBar">
                <NavBar />
            </header>
            <main className="dashBoard" >
                <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
                    <h2>404 Error</h2>
                    <h2>Page Not Found</h2>
                </div>
            </main>
            <aside className="sideBar">
                <SideBar />
            </aside>
            <Outlet />
        </div>
    );
}
