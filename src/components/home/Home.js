import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import pic from './jibon.png'
import { FaFilePdf, FaGithub, FaFacebookF, FaLinkedin } from "react-icons/fa";
import Aboutme from '../Aboutme/Aboutme';
import Skills from '../skills/Skills';
import Blog from '../Blog/Blog';
import Projects from '../Projects/Projects';
import { useState } from 'react';
import Contact from '../Contact/Contact';


const Home = () => {

    const [projects, setProjects] = useState([])


    useEffect(() => {

        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <div>
            <div className='container mx-auto lg:flex justify-around items-start mt-20 mb-5 '>

                <div className="avatar container">
                    <div className="lg:w-[70%] rounded-full ring ring-primary ring-offset-green-600 ring-offset-2 hover:shadow-2xl ">
                        <img src={pic} alt='' />
                    </div>
                </div>
                <div className='lg:mt-3 '>
                    <h1 className='text-2xl font-medium mb-8'><span className='text-purple-600'>HI </span> THERE! I'M</h1>
                    <h2 className='text-4xl mt-2 font-bold'><span className='text-purple-600'>Md.Mazammel</span> Hossain</h2>
                    <h2 className='mt-2 text-2xl font-semibold text-stone-900 '><span className='text-white lg:text-stone-900'>A junior </span> Web Developer passionate <span className='text-white lg:text-stone-900'>about</span> creating interactive applications and experiences on the <span className='text-purple-600'>web</span>.</h2>
                    <div className='mt-20 grid grid-cols-4 gap-6'>
                        <div className='mx-auto'>
                            <a title='Resume' target='blank' href="https://drive.google.com/file/d/1k0JCJBSGUTGoVS80sFWV15sE_uB-Rjp2/view?usp=share_link"><FaFilePdf className='text-purple-600 text-4xl hover:text-purple-800 lg:mr-8'></FaFilePdf></a>
                        </div>
                        <div>
                            <a title='GitHub' target='blank' href="https://github.com/Mojammel54    "><FaGithub className='text-purple-600 text-4xl hover:text-purple-800 '></FaGithub></a>
                        </div>
                        <div>
                            <a title='LinkedIn' target='blank' href="https://www.linkedin.com/in/mozammel-hossain-jibon/"><FaLinkedin className='text-purple-600 text-4xl hover:text-purple-800 '></FaLinkedin> </a>
                        </div>
                        <div>
                            <a title='facebook' target='blank' href="https://www.facebook.com/thegreatjibon/"><FaFacebookF className='text-purple-600 text-4xl hover:text-purple-800 '></FaFacebookF></a>
                        </div>

                    </div>

                </div>

            </div>



            <Aboutme></Aboutme>
            <div className="divider"></div>
            <Skills></Skills>
            <div className="divider"></div>
            <Blog></Blog>
            <div className="divider"></div>


            <div>
                <span className=" text-black font-bold uppercase">Projects</span>
                <div className='grid md:grid-cols-2 mt-8'>
                    {

                        projects?.map(project => <Projects project={project} key={project._id}></Projects>)

                    }

                </div>
            </div>
            <div className="divider"></div>
            <Contact></Contact>

        </div>
    );
};

export default Home;