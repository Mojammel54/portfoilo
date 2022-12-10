import React from 'react';
import './About.css'
import { FaSmile } from "react-icons/fa";
const Aboutme = () => {
    return (
      
        <div className="px-8">
            <div className="grid gap-8 items-start justify-center">
                <span className="pr-6 text-black font-bold ">SOME INFO</span>
                {/* <span className="pr-6 lg:hidden text-gray-100"><FaSmile classNameName='inline-flex text-2xl text-purple-600'></FaSmile> ABOUT ME</span> */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button className="relative px-7 py-4 bg-black rounded-lg leading-none lg:flex items-center lg:divide-x divide-gray-600">
                        <span className="lg:flex items-centerspace-x-5">
                            <span className="lg:block hidden p-32 text-gray-100"><FaSmile className='inline-flex text-2xl text-purple-600'></FaSmile> ABOUT ME</span>
                        </span>
                        <span className="pl-8 text-indigo-400 group-hover:text-gray-100 transition duration-200 text-xl font-semibold"> <span className='lg:hidden'>ABOUT ME <br /></span> <span className='lg:hidden '>..................................................................... <br /> </span>I'm a junior web developer with a background in computer science and engineering. <br /> My recently-finished web development course at Programming Hero experience has shaped my code evaluation and website development knowledge.I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Aboutme;