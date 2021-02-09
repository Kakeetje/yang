import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.css';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/nigiri">
                Nigiri
            </a>
            <a className="menu-item" href="/hosomaki">
                Hosomaki
            </a>
            <a className="menu-item" href="/urumaki">
                Urumaki
            </a>
            <a className="menu-item" href="/crispyrolls">
                Crispy Rolls
            </a>
        </Menu>
    );
};
