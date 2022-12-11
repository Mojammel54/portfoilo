import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v1vf7md', 'template_hqlwwr7', form.current, 'b7ueTD0kvM43xk2cE')
            .then((result) => {
                console.log(result.text);
                toast.success('message sent')
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='mb-5' id='contact'>
            <span className=" text-black font-bold uppercase text-2xl ">Say Hello</span>
            <form className='' ref={form} onSubmit={sendEmail}>
                <span className=" text-black font-bold ">Contact Form</span>
                <div className="px-8">
                    <div className="grid gap-8 items-start justify-center mt-5">
                   
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-rose-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <div className="relative px-7 py-4 bg-black rounded-lg leading-none lg:flex items-center  divide-gray-600">
                             
                            <div className='lg:w-[1200px]'>
                                <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200 text-xl font-semibold "> <input className='block mt-5 text-black rounded-xl text-center hover:bg-sky-200 mx-auto' type="text" name="user_name" placeholder='Your Name' /></span>
                            <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200 text-xl font-semibold"> <input className='block mt-5 text-black rounded-xl text-center hover:bg-sky-200 mx-auto' type="email" name="user_email" placeholder='Your Email' /></span>
                                <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200 text-xl font-semibold"><textarea className='block mt-5 text-black  rounded-xl text-center hover:bg-sky-200 mx-auto' name="message" placeholder='Message' /></span>
                                <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200 text-xl font-semibold btn btn-outline mt-8">  <input type="submit" value="Send" /></span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>



        </div>
    );
};

export default Contact;