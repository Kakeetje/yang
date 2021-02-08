import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';


export default function SideBar() {
    const sideMenu = [{
        title: 'Nigiri',
        path: '/menu/nigiri',
        icon: <GiIcons.GiSushis />,
        cName: 'nav-text'
    },
        {
            title: 'Hosomaki',
            path: '/menu/hosomaki',
            icon: <GiIcons.GiShrimp />,
            cName: 'nav-text'
        },
        {
            title: 'Urumaki',
            path: '/menu/urumaki',
            icon: <FaIcons.FaBacon />,
            cName: 'nav-text'
        },
        {
            title: 'Crispy Rolls',
            path: '/menu/crispyrolls',
            icon: <AiIcons.AiFillApple />,
            cName: 'nav-text'
        },
        {
            title: 'Bijgerechten',
            path: '/menu/bijgerechten',
            icon: <IoIcons.IoIosBeer />,
            cName: 'nav-text'
        }]
    SideBar(sideMenu);
}




