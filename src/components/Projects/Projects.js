import React from 'react';
import { useNavigate } from 'react-router-dom';
import test from './test.png'
const Projects = ({ project }) => {
    const navigate = useNavigate()
    console.log(project)

    const details = id => {


        navigate(`/details/${id}`)



    }


    return (
        <div className='mb-5'>

            <div className="px-10">
                <div className="grid gap-8 items-start justify-center ">


                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <button className="relative px-7 py-4 bg-black rounded-lg leading-none lg:flex items-center lg:divide-x divide-gray-600">
                            <span className="lg:flex items-centerspace-x-5">
                                <span className="lg:block hidden pr-10 text-[#dc2626] font-bold uppercase h-32 w-32">{project.name}</span>
                            </span>
                            <div className='text-white'>
                                <img className='hover:scale-150' src={project?.picture} alt="" />
                                <ul>

                                    <p className='mt-5 mb-5'>Details</p>
                                    <p className='mb-3'>1.{project?.Details}</p>
                                    <p className='mb-3'>2.{project?.Details2}</p>
                                    <p className=''>3.{project?.Details3}. <span className='text-[#a3e635]'>{project?.Details4}</span>  </p>
                                    <p className='mb-3'>{project?.Details5}</p>
                                    <button onClick={() => details(project._id)} className='btn btn-sm btn-outline btn-warning'>See Details</button>


                                </ul>
                            </div>
                            {/* <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200 text-xl font-semibold"> <span className=''><br /></span>Coming soon....</span> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;