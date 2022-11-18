import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-purple-500 to-orange-300 shadow-2xl">
                <div className="">
                    <Link className="btn btn-ghost normal-case text-xl">Md.Mazammel Hossain</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Nav;