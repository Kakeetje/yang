import React from 'react';
import SideBar from "../../Components/SideBar/SideBar";
import './NavBar.css';


function NavBar() {
    return (
        <div className="App" id="outer-container">
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
    );
}

export default NavBar;
