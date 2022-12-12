import React from 'react';
import * as Icon from 'react-bootstrap-icons'

const styles = {
    titleSize: {
        color: "#0492C2",
        fontSize: 14,
        marginBottom: "2em"
    }
};

export default function SideBar() {
    return (
        <>
            <h1 className='ps-4 pt-4' style={styles.titleSize}>GoodNight - Admin</h1>
            <ul>
                <li><a href="/"><span className='me-2'><Icon.HouseDoor /></span>Acceuil</a></li>
                <li><a href="#"><span className='me-2'><Icon.Briefcase /></span>Formules</a></li>
                <li><a href="/users"><span className='me-2'><Icon.List /></span>Utilisateurs</a></li>
            </ul>
        </>
    );
}