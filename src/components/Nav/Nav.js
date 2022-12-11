import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import UseAnimations from "react-useanimations";
import download from 'react-useanimations/lib/arrowDown'
export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="navbar  bg-transparent bg-gradient-to-r from-purple-500 to-orange-300  shadow-2xl sticky top-0 z-50">
            <div className="py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-5">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <NavLink
                            to="/"
                            aria-label="company"
                            title="Jibon"
                            className="inline-flex items-center mr-8"
                        >

                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                Md.Mazammel Hossain
                            </span>
                        </NavLink>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <NavLink
                                    to="/"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <HashLink
                                    to="#intro"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Introduction
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    to="#about"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    About
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    to="#skill"
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Skills
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    to="#blog"
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Blog
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    to="#projects"
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    projects
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    to="#contact"
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    className="font-medium text-gray-100 tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Contact me
                                </HashLink>
                            </li>
                            <li className="flex">
                                <a className='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400' href="https://drive.google.com/file/d/1k0JCJBSGUTGoVS80sFWV15sE_uB-Rjp2/view?usp=share_link"><span >Resume</span> </a>
                                <a className='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400' href="https://drive.google.com/file/d/1k0JCJBSGUTGoVS80sFWV15sE_uB-Rjp2/view?usp=share_link"><UseAnimations animation={download} size={20} strokeColor='white' wrapperStyle={{ padding: 0 }} /></a>
                            </li>

                        </ul>
                    </div>

                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <NavLink
                                                to="/"
                                                aria-label="company"
                                                title="Jibon"
                                                className="inline-flex items-center mr-8"
                                            >

                                                <span className="ml-2 text-xl font-bold tracking-wide  uppercase">
                                                    Md.Mazammel Hossain
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <HashLink
                                                    to="/"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    Home
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink
                                                    to="#intro"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    Introduction
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink
                                                    to="#about"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    About
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink
                                                    to="#skill"
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    className="font-medium tracking-widetransition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    Skills
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink
                                                    to="#blog"
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    Blog
                                                </HashLink>
                                            </li>

                                            <li>
                                                <HashLink
                                                    to="#projects"
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    projects
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink
                                                    to="#contact"
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    Contact me
                                                </HashLink>
                                            </li>
                                            <li className="flex ml-[100px]">
                                                <a className='font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400' href="https://drive.google.com/file/d/1k0JCJBSGUTGoVS80sFWV15sE_uB-Rjp2/view?usp=share_link"><span >Resume</span> </a>
                                                <a className='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400' href="https://drive.google.com/file/d/1k0JCJBSGUTGoVS80sFWV15sE_uB-Rjp2/view?usp=share_link"><UseAnimations animation={download} size={20} strokeColor='black' wrapperStyle={{ padding: 0 }} /></a>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};