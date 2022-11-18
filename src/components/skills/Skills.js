
import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

import { GrReactjs } from "react-icons/gr";
import { SiReactrouter, SiFirebase, SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

const Skills = () => {

    const icons = [

        {
            icon: <FaHtml5></FaHtml5>

        },
        {
            icon: <FaCss3Alt></FaCss3Alt>
        },
        {
            icon: <SiTailwindcss></SiTailwindcss>

        },
        {
            icon: <FaBootstrap></FaBootstrap>

        },
        {
            icon: <SiJavascript></SiJavascript>

        },
        {
            icon: <GrReactjs></GrReactjs>

        },
        {
            icon: <SiReactrouter></SiReactrouter>

        },
        {
            icon: <TbApi></TbApi>

        },

        {
            icon: <SiFirebase></SiFirebase>

        },
        {
            icon: <FaNode></FaNode>

        },
        {
            icon: <DiMongodb></DiMongodb>

        },
        {
            icon: <SiExpress></SiExpress>

        },

    ]

    return (
        <div>
            <div class="px-8 py-32">
                <div class="grid gap-8 items-start justify-center">
                    <h1 className='pr-6 text-black font-bold'>CHECK OUT MY</h1>
                    <div class="relative group">
                        <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <button class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                            <span class="lg:flex items-center space-x-5">

                                <span class="pr-6 text-gray-100">SKILLS</span>
                            </span>
                            <span class="p-12  text-indigo-400 group-hover:text-gray-100 transition duration-200 lg:grid lg:grid-cols-6 grid grid-cols-3 gap-10">
                          
                                {

                                icons.map(icon => <div className='w-32'>

                                    <p className=' mx-auto text-4xl lg:grid grid-rows-2 '>{icon?.icon}</p>


                                </div>)


                            }</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;