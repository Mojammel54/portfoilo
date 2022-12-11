import React from 'react';
import { Link } from 'react-router-dom';
import UseAnimations from "react-useanimations";
import download from 'react-useanimations/lib/arrowDown'
import { HashLink } from 'react-router-hash-link';
const Nav = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-purple-500 to-orange-300 shadow-2xl ">
                <div className="">
                    <Link className="btn btn-ghost normal-case text-xl"></Link>
                </div>
                <div className=''>
                    <div className="navbar-center lg:flex hidden">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                        </ul>
                        <ul className="menu menu-horizontal p-0">
                            <li><HashLink to='#about'>About</HashLink></li>
                        </ul>
                        <ul className="menu menu-horizontal p-0">
                            <li><HashLink to='#skill'>About</HashLink></li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="menu xl:ml-[900px] lg:ml-[600px] md:ml-[500px] ml-32">
                            <a className='font-bold mx-auto' href="https://drive.google.com/file/d/1k0JCJBSGUTGoVS80sFWV15sE_uB-Rjp2/view?usp=share_link"><UseAnimations animation={download} size={40} strokeColor='black' wrapperStyle={{ padding: 0 }} /> <span className='ml-[-9px]'>Resume</span> </a>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Nav;