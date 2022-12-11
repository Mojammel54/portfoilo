import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Nav/Nav';




const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;